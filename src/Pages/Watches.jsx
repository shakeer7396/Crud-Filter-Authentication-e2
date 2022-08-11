import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getWatchesdata } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";
import WatchCard from "../Components/WatchCard";
import {useNavigate,Link} from "react-router-dom";


const Watches = () => {
const dispatch=useDispatch();
const watchesData=useSelector((state)=>state.AppReducer.watches)


  useEffect(()=>{
    dispatch(getWatchesdata())
  },[])
  console.log(watchesData)
  return (
    <div>
      <Filter />
      <div style={{"display":"grid","gridTemplateColumns":"repeat(4,1fr)","gap":"10px"}}>
        {/* Map through the watch list here using WatchCard Component */}
        {watchesData.map((item)=>{
          return <div>
            <Link to={`/watches/${item.id}`}><WatchCard key={item.id} list={item} 
              /></Link>
            
          </div>
        })}
      </div>
    </div>
  );
};

export default Watches;
