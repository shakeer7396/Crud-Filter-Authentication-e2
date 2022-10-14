import React from "react";

const WatchCard = ({ list }) => {
  let listId=null
  return (
    <div 
    style={{"width":"80%","marginLeft":"20%","height":"300px",}}>
      <div>
        <img  src={list.image} alt="" style={{"width":"100%","height":"250px"}}/>
      </div>
      <div >
        <div >{list.name}</div>
        <div>{list.category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
