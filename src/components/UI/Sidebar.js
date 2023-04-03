import React, { useContext, useRef } from "react";

import { Link } from "react-router-dom";

import { links } from "../../data/menuLinks";
import logoEW from "../../assets/img/logoW.png";
import { AppContext } from "../../contexts/AppContext";
import "./styles/Sidebar.css";

const Image = React.memo(function Image(props) {
  return <img src={props.src} alt={props.alt} className={props.className} />;
});

const Sidebar = () => {
  const { isActive } = useContext(AppContext);
  const sidebarRef = useRef();

  return (
    <aside
      ref={sidebarRef}
      className={`app--sidebar ${!isActive ? "not-active" : "active"}`}
    >
      <div className="app--sidebar-header">
        <Link to="/">
          <Image className="sidebar--logo" alt="EverywhereTEW" src={logoEW} />
        </Link>
      </div>
      <div className="app--sidebar-links">
        {links.map((link) => {
          return (
            <div className="everywhere--ui sidebar-link" key={link.slug}>
              <Link to={link.slug}>
                <span>{link.icon}</span>
                {link.text}
              </Link>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
