import { Box, Button } from "@mui/material";
import React from "react";

const PastConversation = () =>{
    const pastConversations = localStorage.getItem("Saved Chats");
    console.log(pastConversations);
    return(
        <Box>
            
        </Box>
    )
}
export default PastConversation;