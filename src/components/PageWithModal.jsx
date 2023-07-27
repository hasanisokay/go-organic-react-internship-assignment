import React, { useState, useEffect } from "react";
import { Modal, Fade, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PageWithModal = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate("/");
    }, 3000);
  }, []);

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <div>
            <h2>Warning!!!</h2>
            <p>You need to fill up the from to access this page.</p>
            <Button onClick={handleClose} variant="contained" color="primary">
              Go to the form.
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default PageWithModal;
