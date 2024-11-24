import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const CardComponent = () => {
  const customizedSampleQuestions = [
    {
      id: 1,
      title: "Hi, what is the weather",
      subTitle: "Get immediate AI generated response",
    },
    {
      id: 2,
      title: "Hi, what is my location",
      subTitle: "Get immediate AI generated response",
    },
    {
      id: 3,
      title: "Hi, what is the temperature",
      subTitle: "Get immediate AI generated response",
    },
    {
      id: 4,
      title: "Hi, how are you",
      subTitle: "Get immediate AI generated response",
    },
  ];
  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {customizedSampleQuestions.map((item) => (
        <Grid item key={item.id} xs={12} sm={12} md={6}>
          <Card
            sx={{
              borderRadius: "5px",
              display: "flex",
              textAlign: "left",
              pb: "20px",
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
              cursor:"pointer"
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: "20px", fontWeight: "700" }}>
                {item.title}
              </Typography>
              <Typography variant="p" sx={{ color: "#00000080" }}>
                {item.subTitle}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default CardComponent;
