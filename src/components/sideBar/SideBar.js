import React, { useState } from "react";
import {
  Box,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; 
import chatBotLogo from "../../assets/chatBotLogo.png";
import editImage from "../../assets/editImage.png";
import { Link } from "react-router-dom";

const SideBar = (props) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const SidebarContent = () => (
    <Box
      sx={{
        width: isMobile ? "70vw" : "19%",
        height: "92vh",
        backgroundColor: props.isDark ? "black" : "#fff",
        color: props.isDark? "black": "",
      }}
    >
      {/* icon and title here */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          background: "#D7C7F4",
        }}
      >
        <img
          src={chatBotLogo}
          style={{ borderRadius: "50%" }}
          alt="chat bot logo"
          height={30}
          width={30}
        />
        <Typography>New Chat</Typography>
        <img
          onClick={props?.handleAddNewChat}
          src={editImage}
          style={{ cursor: "pointer" }}
          alt="edit icon"
          height={20}
          width={20}
        />
      </Box>

      {/* all the previous conversations here */}
      <Box
        sx={{
          backgroundColor: props.isDark? "black": "#fff",
          padding: "10px",
          display: "flex",
          justifyContent: "Center",
        }}
      >
        <Link to="/past-conversations">
          <Button
            variant="contained"
            sx={{
              background: "#D7C7F4",
              color: "black",
              textTransform: "none",
              borderRadius: "10px",
            }}
          >
            Past conversations
          </Button>
        </Link>
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
