import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
const DataTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "userId",
      headerName: "User Id",
      width: 150,
      editable: true,
    },
    {
      field: "id",
      headerName: "Id",
      width: 150,
      editable: true,
    },
    {
      field: "title",
      headerName: "Title",
      type: "string",
      width: 110,
      editable: true,
    },
    {
      field: "body",
      headerName: "Body",
      type: "string",
      width: 200,
      editable: true,
    },
  ];

  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default DataTable;
