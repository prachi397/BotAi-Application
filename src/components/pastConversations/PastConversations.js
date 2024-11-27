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
import botAiLogo from "../../assets/chatBotLogo.png";
import StarRating from "../starRating/StarRating";
import editImage from "../../assets/editImage.png";
import { Edit } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const PastConversation = () => {
  const navigate = useNavigate();

  const pastConversations = JSON.parse(
    localStorage.getItem("Saved Chats") || "[]"
  );

  const handleEditConversation = (conversation) => {
    // Save the selected conversation to localStorage or state
    localStorage.setItem("SelectedChat", JSON.stringify(conversation));
    // Redirect to the chat page
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#9785BA",
          fontSize: "28px",
          fontWeight: "700",
          pt: "10px",
        }}
      >
        Conversation History
      </Typography>
      <Box sx={{ padding: "20px" }}>
        {Array.isArray(pastConversations) && pastConversations?.length > 0 ? (
          pastConversations?.map((group, groupIdx) => (
            <>
              <Typography
                variant="h4"
                sx={{ fontSize: "20px", mb: "10px", mt: "20px" }}
              >
                {group.chats[0].date}
              </Typography>
              <Typography>
                <span style={{ fontWeight: "bold" }}>Ratings :</span>{" "}
                <span style={{ color: "#9785BA" }}>
                  {group.overAllFeedbacks}
                </span>
              </Typography>
              <StarRating rating={group.overallRatings} readOnly />
              <Card
                key={groupIdx}
                sx={{
                  background: "#D7C7F421",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <IconButton
                  onClick={() => handleEditConversation(group)}
                  aria-label="Edit Conversation"
                >
                  <Edit />
                </IconButton>
                <CardContent>
                  {group?.chats?.map((chat, chatIdx) => (
                    <Box
                      key={chatIdx}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={userProfile}
                          alt="user profile"
                          height={25}
                          width={25}
                          style={{ borderRadius: "50%" }}
                        />
                        <Typography variant="body1">
                          <span style={{ fontWeight: "bold" }}> You:</span>{" "}
                          <span> {chat.question}</span>
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          "&:hover .hover-items": {
                            display: "block",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                          }}
                        >
                          <img
                            src={botAiLogo}
                            alt="bot ai profile"
                            height={25}
                            width={25}
                            style={{ borderRadius: "50%" }}
                          />
                          <Typography variant="body2">
                            <span style={{ fontWeight: "bold" }}>AI:</span>{" "}
                            <span> {chat.answer}</span>
                          </Typography>
                        </Box>
                        <Box
                          className="hover-items"
                          sx={{ display: "none", marginTop: "8px" }}
                        >
                          <StarRating rating={chat.starRating} readOnly />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          marginTop: "13px",
                          color: "#0000009E",
                        }}
                      >
                        {chat.time}
                      </Typography>
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </>
          ))
        ) : (
          <Typography>No conversations available.</Typography>
        )}
      </Box>
    </Box>
  );
};
export default PastConversation;
