import React, { useContext } from "react";
// Icone
import { Avatar, IconButton } from "@mui/material";

import { FiLogOut, FiBell } from "react-icons/fi";
import { VscMenu } from "react-icons/vsc";

// CSS
import "./styles/Header.css";
import { AppContext } from "../../contexts/AppContext";

const Header = () => {
  const { setIsActive } = useContext(AppContext);

  return (
    <header className="app--header">
      <div className="everywhere--ui menu">
        <IconButton onClick={() => setIsActive((prevState) => !prevState)}>
          <VscMenu />
        </IconButton>
      </div>
      <div className="everywhere--ui user">
        <Avatar style={{ cursor: "pointer" }} className="everywhere--ui avatar">
          EW
        </Avatar>
        <IconButton>
          <FiBell />
        </IconButton>
        <IconButton>
          <FiLogOut />
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
