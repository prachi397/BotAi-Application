import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserChat from "./UserChat";

const SearchComponent = (props) => {
  const [updatedChatList, setUpdatedChatList] = useState([]);

  useEffect(() => {
    if (props?.chatList?.length > 0) {
      setUpdatedChatList(
        props?.chatList.map((chat) => ({
          ...chat,
          like: false,
          dislike: false,
        }))
      );
    }
  }, [props?.chatList]);

  //fucntion to save the chats in local storage
  function handleChatSave(updatedChatList){
    localStorage.setItem("Saved Chats",JSON.stringify(updatedChatList));
  }

  return (
    <Box>
      {/* chats of the user */}
      <UserChat
        chatList={props.chatList}
        updatedChatList={updatedChatList}
        setUpdatedChatList={setUpdatedChatList}
      />
      {/* search functionality */}
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          value={props.question}
          onChange={props.handleUserTyping}
          sx={{
            background: "#FFFFFF",
            border: "1px solid #00000073",
            borderRadius: "5px",
            width: { xs: "210px", sm: "575px", md: "795px", lg: "970px" },
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: "#D7C7F4",
            color: "black",
            borderRadius: "5px",
            textTransform: "none",
            fontSize: "17px",
          }}
          onClick={props.handleAskQuestion}
        >
          Ask
        </Button>
        <Button
          variant="contained"
          sx={{
            background: "#D7C7F4",
            color: "black",
            borderRadius: "5px",
            textTransform: "none",
            fontSize: "17px",
          }}
          onClick={()=>handleChatSave(updatedChatList)}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
export default SearchComponent;
