import React from "react";

const WatchCard = ({ list }) => {
  let listId=null
  return (
    <div data-testid={`watch-card-wrapper-${listId}`}
    style={{"width":"80%","marginLeft":"20%","height":"300px",}}>
      <div>
        <img data-testid="watch-card-image" src={list.image} alt="" style={{"width":"100%","height":"250px"}}/>
      </div>
      <div >
        <div data-testid="watch-name">{list.name}</div>
        <div data-testid="watch-category">{list.category}</div>
      </div>
    </div>
  );
};

export default WatchCard;
