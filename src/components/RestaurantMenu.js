import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu=()=>{
 const {id}=useParams();

 const[resMenu,setRestMenu]=useState({});
 console.log(resMenu);

 useEffect(()=>{
    getRestaurantInfo();
 },[]);

 async function getRestaurantInfo(){
    const data=await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId='+id);
    const json=await data.json();
    setRestMenu(json?.data?.cards[0]?.card?.card?.info);
 }

    return(
        <>
        <div className=" restaurant-menu info-resmenu">
            <div className="restaurant-detail ">
                <div>
                    <img className="recipe-img" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+resMenu.cloudinaryImageId}/>
                </div>
                <div className="res-locality">
                <h1>{resMenu?.name}</h1>
               <p>{resMenu?.areaName}</p>
               <h3>{resMenu?.city}</h3>
               <p>30 min delivery time</p> 
               <p> {resMenu?.avgRating}</p>
                <p>{resMenu?.aggregatedDiscountInfoV2?.descriptionList[0]?.meta}</p>
                
                <h3>{resMenu?.costForTwoMessage}</h3>
                </div>
            </div>
        
        </div>
       
        </>
    )
};
export default RestaurantMenu;