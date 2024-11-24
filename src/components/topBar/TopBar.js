import { Box, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  return (
    <Box sx={{background:"#FFFFFF", display:"flex", gap:"5px", padding:"10px"}}>
      <Box sx={{height:"25px", width:"25px", background:"#FF0000",borderRadius:"20px"}}></Box>
      <Box sx={{height:"25px", width:"25px", background:"#FF9900",borderRadius:"20px"}}></Box>
      <Box sx={{height:"25px", width:"25px", background:"#33EB06",borderRadius:"20px"}}></Box>
    </Box>
  );
};
export default TopBar;
