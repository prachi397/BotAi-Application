import { Box, Typography } from "@mui/material";
import React from "react";
import chatBotLogo from "../assets/chatBotLogo.png";
import editImage from "../assets/editImage.png";

const SideBar = () => {
  return (
    <Box sx={{width:"15%"}}>
      {/* icon and title here */}
      <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between", background:"#D7C7F4",padding:"10px"}}>
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
          style={{cursor:"pointer"}}
          alt="edit icon"
          height={20}
          width={20}
        />
      </Box>

      {/* all the previous conversations here */}
      <Box></Box>
    </Box>
  );
};
export default SideBar;
