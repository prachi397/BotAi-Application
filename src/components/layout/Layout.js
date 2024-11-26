import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SideBar from "../sideBar/SideBar";

const Layout = ({ handleAddNewChat }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar remains constant */}
      <SideBar handleAddNewChat={handleAddNewChat} />
      {/* Dynamic content based on route */}
      <Box
        sx={{
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
            width: { xs: "100%", sm: "81%", md: "81%" },
        }}
      >
        <Outlet /> {/* Placeholder for child routes */}
      </Box>
    </Box>
  );
};

export default Layout;
