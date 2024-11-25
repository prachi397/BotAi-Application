import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import userProfile from "../../assets/userProfile.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const UserChat = ({updatedChatList,setUpdatedChatList }) => {

  const handleLike = (index) => {
    setUpdatedChatList((prevChatList) =>
      prevChatList.map((chat, idx) =>
        idx === index
          ? { ...chat, like: !chat.like, dislike: false } // Toggle like and reset dislike
          : chat
      )
    );
  };

  const handleDislike = (index) => {
    setUpdatedChatList((prevChatList) =>
      prevChatList.map((chat, idx) =>
        idx === index
          ? { ...chat, dislike: !chat.dislike, like: false } // Toggle dislike and reset like
          : chat
      )
    );
  };

  return (
    <Box
      sx={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {updatedChatList?.length>0
        ? (updatedChatList?.map((ele, idx) => (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* card1 to display question */}
              <Card
                key={idx}
                sx={{
                  background: "#D7C7F421",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  pl: "20px",
                }}
              >
                <CardMedia>
                  <img
                    src={userProfile}
                    alt="user profile"
                    height={50}
                    width={50}
                    style={{ borderRadius: "50%" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    You
                  </Typography>
                  <Typography variant="body1" sx={{ marginBottom: "5px" }}>
                    {ele.question}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      marginTop: "13px",
                      color: "#0000009E",
                    }}
                  >
                    <span>{ele.time}</span>
                  </Typography>
                </CardContent>
              </Card>
              {/* card2 to display corresponding answer */}
              <Card
                key={idx}
                sx={{
                  background: "#D7C7F421",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  pl: "20px",
                }}
              >
                <CardMedia>
                  <img
                    src={userProfile}
                    alt="user profile"
                    height={50}
                    width={50}
                    style={{ borderRadius: "50%" }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Bot AI
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {ele.answer}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      marginTop: "13px",
                      color: "#0000009E",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <span>{ele.time}</span>
                    <Box>
                      {/* like icon */}
                      <IconButton
                        aria-label="like"
                        onClick={() => handleLike(idx)}
                      >
                        <ThumbUpIcon
                          sx={{
                            height: "17px",
                            width: "17px",
                            color: ele.like ? "#deab2c" : "",
                          }}
                        />
                      </IconButton>
                      {/* dislike icon */}
                      <IconButton
                        aria-label="like"
                        onClick={() => handleDislike(idx)}
                      >
                        <ThumbDownIcon
                          sx={{
                            height: "17px",
                            width: "17px",
                            color: ele.dislike ? "#deab2c" : "",
                          }}
                        />
                      </IconButton>
                    </Box>
                  </Typography>
                </CardContent>
              </Card>{" "}
            </Box>
          )))
        : ""}
    </Box>
  );
};
export default UserChat;
