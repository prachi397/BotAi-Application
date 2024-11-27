import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import StarRating from "../starRating/StarRating";

const OverallRatings = ({
  isRatingModalOpen,
  handleRatingModalClose,
  handleRatingModalSubmit,
  overallRating,
  handleAddStars,
  Overallfeedback,
  setOverallFeedback,
}) => {
  return (
    <Dialog
      open={isRatingModalOpen}
      onClose={handleRatingModalClose}
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
        How would you rate this chat ?
      </Typography>
      <DialogContent>
        <TextField
          variant="outlined"
          onChange={(e) => setOverallFeedback(e.target.value)}
          value={Overallfeedback}
          sx={{
            background: "#FFFFFF",
            border: "1px solid #00000073",
            borderRadius: "5px",
            marginBottom:"10px"
          }}
        />
        <StarRating
          className="overall-ratings"
          rating={overallRating}
          handleChange={(event, newValue) => handleAddStars(event, newValue)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          style={{ background: "#D7C7F4", color: "black" }}
          onClick={handleRatingModalSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          style={{ background: "#D7C7F4", color: "black" }}
          onClick={handleRatingModalClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default OverallRatings;
