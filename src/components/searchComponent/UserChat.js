import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import userProfile from "../../assets/userProfile.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const UserChat = ({ chatList }) => {
    const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  //function to like the chat
  const handleLike = () => {
    if (like) {
      setLike(false); 
    } else {
      setLike(true); 
      setDislike(false); 
    }
  };

   //function to dislike the chat
   const handleDisLike = () => {
    if (dislike) {
      setDislike(false); 
    } else {
      setDislike(true); 
      setLike(false); 
    }
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
      {chatList?.length &&
        chatList?.map((ele, idx) => (
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
                    <IconButton aria-label="like"  onClick={handleLike}>
                      <ThumbUpIcon sx={{ height: "17px", width: "17px" }} />
                    </IconButton>
                    {/* dislike icon */}
                    <IconButton aria-label="like" onClick={handleDisLike}>
                      <ThumbDownIcon sx={{ height: "17px", width: "17px" }} />
                    </IconButton>
                  </Box>
                </Typography>
              </CardContent>
            </Card>{" "}
          </Box>
        ))}
    </Box>
  );
};
export default UserChat;
