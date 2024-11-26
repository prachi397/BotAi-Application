import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <Link to='/'>
      <Box sx={{background:"#FFFFFF", display:"flex", gap:"5px", padding:"10px", cursor:"pointer"}}>
      <Box sx={{height:"25px", width:"25px", background:"#FF0000",borderRadius:"20px"}}></Box>
      <Box sx={{height:"25px", width:"25px", background:"#FF9900",borderRadius:"20px"}}></Box>
      <Box sx={{height:"25px", width:"25px", background:"#33EB06",borderRadius:"20px"}}></Box>
    </Box>
    </Link>
  );
};
export default TopBar;
