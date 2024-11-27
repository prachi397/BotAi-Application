import {
  Box,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const AllFeedbacks = ({ isDark }) => {
  const [filteredFeedbacks, setFilteredFeedbacks] = useState([]);
  const [filterRating, setFilterRating] = useState(""); // Default to All Ratings

  useEffect(() => {
    const pastConversations = JSON.parse(
      localStorage.getItem("Saved Chats") || "[]"
    );
    setFilteredFeedbacks(pastConversations);
  }, []);

  const handleFilter = (rating) => {
    const pastConversations = JSON.parse(
      localStorage.getItem("Saved Chats") || "[]"
    );
    if (rating === "") {
      setFilteredFeedbacks(pastConversations); // Show all feedbacks for "All Ratings"
    } else {
      const filtered = pastConversations.filter(
        (conversation) => conversation.overallRatings === Number(rating)
      );
      setFilteredFeedbacks(filtered);
    }
    setFilterRating(rating); // Update the filter state
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#9785BA",
          fontSize: "28px",
          fontWeight: "700",
          pt: "10px",
        }}
      >
        All Feedbacks
      </Typography>
      {/* Dropdown for Filter */}
      <Box sx={{ width: "200px" }}>
        <Select
          value={filterRating}
          onChange={(e) => handleFilter(e.target.value)}
          displayEmpty
          fullWidth
          sx={{
            backgroundColor: isDark ? "#333" : "#fff",
            color: isDark ? "white" : "black",
            borderRadius: "5px",
          }}
        >
          <MenuItem value="">
            <em>All Ratings</em> {/* Default option */}
          </MenuItem>
          {[1, 2, 3, 4, 5].map((rating) => (
            <MenuItem key={rating} value={rating}>
              {rating} Stars
            </MenuItem>
          ))}
        </Select>
      </Box>

      {/* Feedback Table */}
      <Table
        sx={{
          width: "80%",
          background: isDark ? "black" : "#f9f9f9",
          color: isDark ? "white" : "black",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "bold", color: isDark ? "white" : "black" }}
            >
              Conversation ID
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: isDark ? "white" : "black" }}
            >
              Feedback
            </TableCell>
            <TableCell
              sx={{ fontWeight: "bold", color: isDark ? "white" : "black" }}
            >
              Rating
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredFeedbacks.length > 0 ? (
            filteredFeedbacks.map((conversation) => (
              <TableRow key={conversation.id}>
                <TableCell sx={{ color: isDark ? "white" : "black" }}>
                  {conversation.id}
                </TableCell>
                <TableCell sx={{ color: isDark ? "white" : "black" }}>
                  {conversation.overAllFeedbacks}
                </TableCell>
                <TableCell sx={{ color: isDark ? "white" : "black" }}>
                  {conversation.overallRatings}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={3}
                align="center"
                sx={{ color: isDark ? "white" : "black" }}
              >
                No ratings available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
};

export default AllFeedbacks;
