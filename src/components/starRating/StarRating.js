import React from "react";
import { Rating } from "@mui/material";

const StarRating = ({ rating, handleChange }) => {

  return (
    <div>
      <Rating
        name="star-rating"
        value={rating}
        onChange={handleChange}
        size="small" 
        precision={0.5} 
      />
    </div>
  );
};

export default StarRating;