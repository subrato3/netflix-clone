import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
    const [show, handleShow] = useState(false);
  
    useEffect(() => {
    window.addEventListener("scroll",()=>{
        if (window.scrollY > 100){
            handleShow(true);
        } else handleShow(false);
    });
    return()=>{
        window.removeEventListener("scroll",null);
    };
  },[]);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
        <img
        className="navbar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
        alt="Netflix logo"
      />

      <img
        className="navbar_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Navbar;
