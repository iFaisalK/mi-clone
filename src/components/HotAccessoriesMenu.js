import React from "react";
import { Link } from "react-router-dom";
import "../Styles/HotAccessoriesMenu.css"

const hotAccessoriesMenu = () => {
  return (
    <div className="hotAccessoriesMenu">
      <Link className="hotAccessoriesLink" to="/music">
        Music Store
      </Link>
      <Link className="hotAccessoriesLink" to="/smartDevices">
        Smart Devices
      </Link>
      <Link className="hotAccessoriesLink" to="/home">
        Home 
      </Link>
      <Link className="hotAccessoriesLink" to="/lifestyle">
        LifeStyle
      </Link>
      <Link className="hotAccessoriesLink" to="/mobileAccessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default hotAccessoriesMenu;
