import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteWarning(data) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const id = data.data;

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <Icon>delete</Icon>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
            marginBottom={2}>
            Do you want to delete this tenant {id}?
          </Typography>
          <Stack
            spacing={4}
            direction="row"
            alignItems="center"
            justifyContent="center">
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
