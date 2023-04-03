import React from "react";

import { Avatar } from "@mui/material";

import "./styles/Home.css";
import Button from "../components/Root/Button";

const Home = () => {

  return (
    <div className="everywhere--home">
      <div className="everywhere--home profile-card">
        <div className="profile--info">
          <div className="profile--name">
            <h1> EW Azienda </h1>
            <h6> Macnil, SRL </h6>
          </div>
          <div className="profile--avatar">
            <Avatar sx={{ width: 56, height: 56, bgcolor: "#000"}}> EW </Avatar>
          </div>
        </div>
        <div className="everywhere--home profile-actions">
          <Button sx={{color: "#fff"}}> IL MIO PROFILO </Button>
          <Button sx={{color: "#fff"}}> I MIEI PIANI </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
