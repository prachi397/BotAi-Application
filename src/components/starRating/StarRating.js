import React from "react";
import { Rating } from "@mui/material";

const StarRating = ({ rating, handleChange, className }) => {

  return (
    <div>
      <Rating
        name="star-rating"
        value={rating}
        onChange={handleChange}
        size={className!=="overall-ratings"? "small":"large"} 
        precision={0.5} 
      />
    </div>
  );
};

export default StarRating;