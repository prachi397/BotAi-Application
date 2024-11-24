import { Box, Typography } from "@mui/material";
import React from "react";
import chatBotLogo from "../assets/chatBotLogo.png";
import CardComponent from "../cardComponent/CardComponent";
import SearchComponent from "../searchComponent/SearchComponent";

const HomePage = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
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

        {/* search box with save and ask button */}
        <SearchComponent/>
      </Box>
    </Box>
  );
};
export default HomePage;
