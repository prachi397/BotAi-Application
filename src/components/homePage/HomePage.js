import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import chatBotLogo from "../../assets/chatBotLogo.png";
import CardComponent from "../cardComponent/CardComponent";
import SearchComponent from "../searchComponent/SearchComponent";
import sampleData from "../sampleData/sampleData.json";

const HomePage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();
  const [askBtnClicked, setAskBtnClick] = useState(false);
  const [chatList, setChatList] = useState([]);

  function handleUserTyping(e) {
    setQuestion(e.target.value);
  }

  // Get the current time in the desired format
  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const isAm = hours < 12;
    hours = hours % 12 || 12; 
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const amPm = isAm ? "AM" : "PM";
    return `${hours}:${formattedMinutes} ${amPm}`;
  };

  //function to ask question
  function handleAskQuestion() {
    if (question.length > 0) {
      setAskBtnClick(true);
      const scores = sampleData.map((item) => {
        // Split both user question and sample question into words
        const userWords = new Set(question.toLowerCase().split(/\s+/)); // Convert to a set for unique words
        const sampleWords = new Set(item.question.toLowerCase().split(/\s+/));

        // Count the number of matching words
        const matchCount = [...userWords].filter((word) =>
          sampleWords.has(word)
        ).length;

        return {
          ...item,
          score: matchCount, // Higher score means a better match
        };
      });

      // Find the question with the highest score
      const bestMatch = scores.reduce((prev, curr) =>
        curr.score > prev.score ? curr : prev
      );

      // Set the answer based on the best match if it has a score greater than 0
      let response
      if (bestMatch.score > 0) {
        response = bestMatch.response;
      } else {
        response = 
          "As an AI model, I don't have access to this detail. How can I assist you further?";
      }

      const askedTime = getCurrentTime();
      //update the chat list
      setChatList((prevChat)=>[
        ...prevChat,
        {question:question, answer:response, time: askedTime}
      ]);
      setAnswer(response);
      setQuestion("");
    } else {
      setAskBtnClick(false);
    }
  }

  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        width: { xs: "100%", sm: "85%", md: "85%" },
      }}
    >
      {/* title of the application */}
      <Typography
        variant="h3"
        sx={{
          color: "#9785BA",
          fontSize: "28px",
          fontWeight: "700",
          textAlign: "left",
          pl: "30px",
          pt: "10px",
        }}
      >
        Bot AI
      </Typography>

      {/* content of the application */}
      <Box>
        {!askBtnClicked && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
                mt: "3.2%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "20px", md: "28px" },
                  fontWeight: { xs: "300", sm: "500" },
                }}
              >
                How Can I Help You Today?
              </Typography>
              <img
                style={{ borderRadius: "50%" }}
                src={chatBotLogo}
                alt="chat bot logo"
                height={60}
                width={60}
              />
            </Box>

            {/* cards to display customized sample questions on home page */}
            <Box>
              <CardComponent />
            </Box>
          </>
        )}

        {/* search box with save and ask button */}
        <SearchComponent
          question={question}
          answer={answer}
          chatList={chatList}
          handleUserTyping={handleUserTyping}
          handleAskQuestion={handleAskQuestion}
        />
      </Box>
    </Box>
  );
};
export default HomePage;
