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
    <Grid container spacing={2}>
      {customizedSampleQuestions.map((item) => (
        <Grid item key={item.id}>
          <Card>
            <CardContent>
              <Typography>{item.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default CardComponent;
