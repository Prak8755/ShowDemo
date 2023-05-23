import { useEffect, useState } from "react";

const Cards=function(props){
    const {resData}=props;
   const {name,avgRating,costForTwoString, deliveryTime,cloudinaryImageId}=resData.data;
  
     return(
         <>
         <div className="card-section">
               <div className='card'>
                 <img src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+cloudinaryImageId}/>
                 <h1>{name}</h1>
                 <ul className='list-info'>
                 <li className="rating-green">*{avgRating}</li>
                 <li>{deliveryTime}</li>
                 <li>{costForTwoString}</li>
                 </ul>
                 <hr></hr>
                 <div className="btn-section"><a href=''> View More</a></div>
                   
               </div>
               </div>
         </>
     )
 };

const Offers =function(){
    const[offers,setOffers]=useState([])

    getData();

    async function getData(){
const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING');
const json=await data.json();
setOffers(json?.data?.cards[2]?.data?.data?.cards);
    }
    return(
        <>
        <div className="offer-section info">

        <h1>Offers for you </h1>
        <p>Explore top deals and offers exclusively for you!</p>
        </div>
        <div className="restaurant-offers">
            <div className="restaurant-options">
            <a href=''> <h3>Restaurant offers</h3> </a> 
            <a href=''> <h3>Payment Offers and Coupons</h3> </a> 
            </div>
        </div>
       <div className="container">
        {offers.map(e=><Cards resData={e} key={e?.data?.id}/>)}
       </div>
       
        </>
    )
};

export default Offers;