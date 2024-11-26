import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PopUpModal = ({ isOpen, handleClose, handleSubmit, feedback, setFeedback }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      sx={{
        "& .MuiDialog-paper": {
          padding: "20px",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{ color: "#9785BA", fontSize: "20px", fontWeight: "700" }}
      >
        Provide additional feedback
      </Typography>
      <DialogContent>
        <TextField
          variant="outlined"
          onChange={(e)=>setFeedback(e.target.value)}
          value={feedback}
          sx={{
            background: "#FFFFFF",
            border: "1px solid #00000073",
            borderRadius: "5px",
            width:"98%"
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ background: "#D7C7F4", color: "black" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          style={{ background: "#D7C7F4", color: "black" }}
          onClick={handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default PopUpModal;
