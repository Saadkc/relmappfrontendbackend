import React from "react";
import logoIcon from '../../assets/Images/logoIcon.png';

const Nav = () => {

  return (
    <div className="nav layout-container" >

      <div className="logo-icon-container mid-container mid1">
        <img src={logoIcon} alt="Logo" />
      </div>

    </div>
  );
};

export default Nav;