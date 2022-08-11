import React,{useEffect, useState} from "react";
import {useSearchParams} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { getWatchesdata } from "../Redux/AppReducer/action";


const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [Searchparams,SetSearchparams]=useSearchParams();
  const [category,SetCategory] =useState(Searchparams.getAll('category')||[]);
  const dispatch=useDispatch();

  useEffect(()=>{
    SetSearchparams({category:category})
    let categoryparams={
      params:{
        category:Searchparams.getAll("category")
      }
    }
    dispatch(getWatchesdata(categoryparams))
  },[category,Searchparams,dispatch,SetSearchparams])
console.log(category);

  const handleCheckbox =(e)=>{
    const point=e.target.value;
    let newList=[...category];
    if(category.includes(point)){
      newList.splice(newList.indexOf(point),1)
    }
    else{
      newList.push(point);
    }
    SetCategory(newList)

  }
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange={handleCheckbox} defaultChecked={category.includes('Analog')} />
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange={handleCheckbox} defaultChecked={category.includes('Digital')} />
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange={handleCheckbox} defaultChecked={category.includes('Chronography')} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
