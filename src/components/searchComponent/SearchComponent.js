import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const SearchComponent = () => {
  return (
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
        sx={{
          background: "#FFFFFF",
          border: "1px solid #00000073",
          borderRadius: "5px",
          width: { xs: "210px", sm: "575px", md: "795px", lg: "1070px" },
        }}
      />
      <Button
        variant="contained"
        sx={{ background: "#D7C7F4", color: "black", borderRadius: "5px", textTransform:"none", fontSize:"17px"}}
      >
        Ask
      </Button>
      <Button
        variant="contained"
        sx={{ background: "#D7C7F4", color: "black", borderRadius: "5px",textTransform:"none", fontSize:"17px" }}
      >
        Save
      </Button>
    </Box>
  );
};
export default SearchComponent;
