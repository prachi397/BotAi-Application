import { Box, Typography } from "@mui/material";
import React from "react";

const PastConversation = () => {
  const pastConversations = localStorage.getItem("Saved Chats");
  console.log(pastConversations);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Typography
        variant="h3"
        sx={{
          color: "#9785BA",
          fontSize: "28px",
          fontWeight: "700",
          pt: "10px",
        }}
      >
        Conversation History
      </Typography>
    </Box>
  );
};
export default PastConversation;
