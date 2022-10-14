import React from "react";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div >
      <div >
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
        <button  onClick={()=>navigate('/login')} >LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
