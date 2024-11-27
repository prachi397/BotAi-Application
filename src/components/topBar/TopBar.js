import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopBar = ({ handleSwitchTheme, isDark }) => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "10px",
        }}
      >
        <Link to="/">
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              height: "25px",
              width: "25px",
              background: "#FF0000",
              borderRadius: "20px",
            }}
          ></Box>
          <Box
            sx={{
              height: "25px",
              width: "25px",
              background: "#FF9900",
              borderRadius: "20px",
            }}
          ></Box>
          <Box
            sx={{
              height: "25px",
              width: "25px",
              background: "#33EB06",
              borderRadius: "20px",
            }}
          ></Box>
        </Box>
        </Link>
        <Button
          sx={{
            background: "#D7C7F4",
            color: "black",
            textTransform: "none",
            borderRadius: "10px",
          }}
          variant="contained"
          onClick={handleSwitchTheme}
        >
          {isDark ? "Light Theme" : "Dark Theme"}
        </Button>
      </Box>
  );
};
export default TopBar;
