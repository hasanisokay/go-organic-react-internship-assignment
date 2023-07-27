import React, { useState } from "react";
import { List, ListItem, ListItemText, Collapse } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentSelection = () => {
  const [expandedDepartments, setExpandedDepartments] = useState([]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  const handleExpand = (department) => {
    setExpandedDepartments((prev) => {
      if (prev.includes(department)) {
        return prev.filter((item) => item !== department);
      } else {
        return [...prev, department];
      }
    });
  };

  const handleSelect = (department, subDepartments) => {
    setSelectedDepartments((prev) => {
      if (prev.includes(department)) {
        return prev.filter((item) => item !== department);
      } else {
        const allSubDepartmentsSelected =
          subDepartments &&
          subDepartments.every((subDep) => prev.includes(subDep));

        return allSubDepartmentsSelected
          ? [...prev, department, ...subDepartments]
          : [...prev, department];
      }
    });
  };

  const isDepartmentExpanded = (department) =>
    expandedDepartments.includes(department);
  const isDepartmentSelected = (department) =>
    selectedDepartments.includes(department);
  const isSubDepartmentSelected = (subDepartment) =>
    selectedDepartments.includes(subDepartment);

  const areAllSubDepartmentsSelected = (subDepartments) =>
    subDepartments &&
    subDepartments.every((subDep) => isSubDepartmentSelected(subDep));

  return (
    <List>
      {data.map(({ department, sub_departments }) => (
        <React.Fragment key={department}>
          <ListItem onClick={() => handleExpand(department)}>
            {isDepartmentExpanded(department) ? (
              <ExpandLessIcon sx={{ marginRight: 1 }} />
            ) : (
              <ExpandMoreIcon sx={{ marginRight: 1 }} />
            )}
            <ListItemText primary={department} />
            <Checkbox
              edge="end"
              checked={
                isDepartmentSelected(department) ||
                (isDepartmentExpanded(department) &&
                  areAllSubDepartmentsSelected(sub_departments))
              }
              indeterminate={
                !isDepartmentSelected(department) &&
                isDepartmentExpanded(department) &&
                sub_departments &&
                !areAllSubDepartmentsSelected(sub_departments)
              }
              onChange={() => handleSelect(department, sub_departments)}
            />
          </ListItem>
          <Collapse
            in={isDepartmentExpanded(department)}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {sub_departments.map((subDepartment) => (
                <ListItem key={subDepartment} sx={{ pl: 4 }}>
                  <ListItemText primary={subDepartment} />
                  <Checkbox
                    edge="end"
                    checked={isSubDepartmentSelected(subDepartment)}
                    onChange={() => handleSelect(subDepartment)}
                  />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentSelection;
