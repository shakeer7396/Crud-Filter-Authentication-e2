import React from "react";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
          onClick={()=>navigate('/')}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <button data-testid="navbar-login-button" onClick={()=>navigate('/login')} >LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
