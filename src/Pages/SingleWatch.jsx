import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import { getWatchesdata } from "../Redux/AppReducer/action";


const SingleWatch = () => {
  const dispatch=useDispatch();
  const {id}=useParams();
  const watchesData = useSelector((state)=>state.AppReducer.watches);
  const [currentWatches,setCurrentWatches]=useState({});

  useEffect(()=>{
    if(watchesData?.length==0){
      dispatch(getWatchesdata());

    }
  },[dispatch,watchesData.length])

  useEffect(()=>{
    if(id){
      //filter the id based on the album
      const data= watchesData.find((album)=>album.id ===Number(id));
      data && setCurrentWatches(data);
    }
  },[id,watchesData])
  console.log(currentWatches)
  
  return (
    <div>
      <h2>{currentWatches.name}</h2>
      <div>
        <img src={currentWatches.image} alt="Cover Pic" />
      </div>
      <div>
        <div><h2>{currentWatches.category}</h2></div>
      </div>
    </div>
  );
};

export default SingleWatch;
