import { useState } from "react";

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
 export default Cards;