
import React, { useState } from "react";
import Recipes from "./Recipes";
import './style.css';
const Meal = () => {
    const[search,setSearch]=useState("");
    const[Mymeal,setMeal]=useState();
    const searchMeal=(evt)=>{
        if(evt.key=="Enter")
        {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res=>res.json())
            .then(data=> {
                setMeal(data.meals);
                
            })
        }
    }
    return (
        <>
            <div className="main-page">
                <div className="header">
                    <h1>Zorq Food Recipes</h1>
                    <h4>Thousands of your Favourite foods Recipes can be found here </h4>
                </div>
                <div className="searchbar">
                    
                    <input type="search" placeholder="Enter Recipe Name" className="search_bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchMeal}/>
                                </div>
                <div className="container">
                {   
                  
                  (Mymeal==null)? <p className="notsearch">Not found</p> : 
                       Mymeal.map((res)=>{
                           return(
                          <Recipes data={res}/>)} 
                   
                  ) 
                 
                 } 
                  
                   
                   
                </div>
            </div>
        </>
    )
}
export default Meal;