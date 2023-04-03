import React from "react";

import "./styles/Button.css"

const Button = (props) => {
  return <button className="ew--button" style={props.sx}>{props.children}</button>;
};

export default Button;
