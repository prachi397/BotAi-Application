import React, { useState } from "react";
import { Box, Typography, Drawer, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Breadcrumb menu icon
import chatBotLogo from "../assets/chatBotLogo.png";
import editImage from "../assets/editImage.png";

const SideBar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const SidebarContent = () => (
    <Box sx={{ width: isMobile ? "70vw" : "15%", height: "100%", backgroundColor: "#D7C7F4" }}>
      {/* icon and title here */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px" }}>
        <img
          src={chatBotLogo}
          style={{ borderRadius: "50%" }}
          alt="chat bot logo"
          height={30}
          width={30}
        />
        <Typography>New Chat</Typography>
        <img
          src={editImage}
          style={{ cursor: "pointer" }}
          alt="edit icon"
          height={20}
          width={20}
        />
      </Box>

      {/* all the previous conversations here */}
      <Box>
        {/* Add your conversation list here */}
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          {/* Breadcrumb menu for mobile */}
          <IconButton
            sx={{ position: "absolute", top: 50, left: -5 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            <SidebarContent />
          </Drawer>
        </>
      ) : (
        <SidebarContent />
      )}
    </>
  );
};

export default SideBar;
