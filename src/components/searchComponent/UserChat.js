import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import userProfile from "../../assets/userProfile.png";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import PopUpModal from "../popUpModal/PopUpModal";
import { useSnackbar } from "notistack";
import StarRating from "../starRating/StarRating";

const UserChat = ({ updatedChatList, setUpdatedChatList, onChangeRating }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [starRatings, setStarRatings] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Load the selected chat if it exists
    const selectedChat = JSON.parse(localStorage.getItem("SelectedChat"));
    // Get saved chats from local storage
    const savedChats = JSON.parse(localStorage.getItem("Saved Chats")) || [];
    // Filter out the chat with the same id as the selected chat
    const updatedSavedChats = savedChats.filter(
      (chat) => chat?.id !== selectedChat?.id
    );
    // Update local storage with the remaining chats
    localStorage.setItem("Saved Chats", JSON.stringify(updatedSavedChats));

    if (selectedChat) {
      setUpdatedChatList(selectedChat.chats || []);
      localStorage.removeItem("SelectedChat"); // Clear after loading
    }
  }, [setUpdatedChatList]);

  const handleLike = (index) => {
    setUpdatedChatList((prevChatList) =>
      prevChatList.map((chat, idx) =>
        idx === index
          ? { ...chat, like: !chat.like, dislike: false } // Toggle like and reset dislike
          : chat
      )
    );
    setStarRatings(true);
  };

  const handleDislike = (index) => {
    setUpdatedChatList((prevChatList) =>
      prevChatList.map((chat, idx) =>
        idx === index
          ? { ...chat, dislike: !chat.dislike, like: false } // Toggle dislike and reset like
          : chat
      )
    );
    setIsOpen(true);
  };

  function handleClose() {
    setIsOpen(false);
  }

  function handleSubmit(index) {
    if (feedback.length > 0) {
      setUpdatedChatList((prevChatList) =>
        prevChatList.map((chat, idx) =>
          idx === index ? { ...chat, additionalFeedback: feedback } : chat
        )
      );
      setFeedback("");
      setIsOpen(false);
    } else {
      enqueueSnackbar("Please enter feedback", {
        variant: "warning",
      });
    }
  }

  const handleChange = (event, newValue, index) => {
    setRating(newValue);
    if (onChangeRating) {
      onChangeRating(newValue);
    }
    setUpdatedChatList((prevChatList) =>
      prevChatList.map((chat, idx) =>
        idx === index ? { ...chat, starRating: rating } : chat
      )
    );
  };

  return (
    <>
      {updatedChatList?.length > 0
        ? updatedChatList?.map((ele, idx) => (
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
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
                    "&:hover .hover-buttons": {
                      display: "block",
                    },
                    "&:hover .hover-star-rating": {
                      display: ele.like ? "block" : "none",
                    },
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
                      <Box className="hover-buttons" sx={{ display: "none" }}>
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
                        {ele.dislike && (
                          <PopUpModal
                            isOpen={isOpen}
                            handleClose={handleClose}
                            handleSubmit={() => handleSubmit(idx)}
                            feedback={feedback}
                            setFeedback={setFeedback}
                          />
                        )}
                      </Box>
                    </Typography>
                    {/* star ratings */}
                    <Box
                      className="hover-star-rating"
                      sx={{
                        display: "none",
                      }}
                    >
                      {starRatings && ele.like && (
                        <StarRating
                          rating={ele.starRating || 0}
                          handleChange={(event, newValue) =>
                            handleChange(event, newValue, idx)
                          }
                        />
                      )}
                    </Box>
                  </CardContent>
                </Card>{" "}
              </Box>
            </Box>
          ))
        : ""}
    </>
  );
};
export default UserChat;
