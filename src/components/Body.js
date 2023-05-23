import { useState, useEffect } from "react";
import Cards from "./Cards";
import { LOGO } from "../common/imageLinks";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import Header from "./Header";


let data,setData;
let restaurantData,setRestaurantData;

 export const Navbar=function(){
    const [searchInput,setSearchInput]=useState('RECIPE');
 [data,setData]=useState([]);

   return (
    <>
    <div className="nav-bar">
    <div className="nav-items">
        <img src={LOGO} alt='Swiggy'/>
        <ul className="nav-list">
        <li className="list list-item"><Link to='/'>Home</Link></li>
        <li className="list list-item"><Link to='/offers'>Offers</Link></li>
        <li className="list list-item"><Link to='/help'>Help</Link></li>
        <li className="list list-item"><Link to='/cart'>Cart</Link></li>
        </ul>
        <input className='search-recipe' type='text' placeholder={searchInput} onChange={function(e){
            setSearchInput(e.target.value);
        }}></input>
        <button className='btn-check btn' onClick={function(){
            setRestaurantData(data?.filter(e=>e?.data?.name?.toLowerCase().includes(searchInput.toLowerCase())))
            
        }}>Search</button>
    </div>
    </div>
   
    </>
    )
};



const Body=function(){
[restaurantData,setRestaurantData]=useState([]);

    useEffect(function(){
     getData();
    },[]);


   async function getData(){

       const data1= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING');
       const json= await data1.json();
setRestaurantData(json?.data?.cards[2]?.data?.data?.cards);
setData(json?.data?.cards[2]?.data?.data?.cards);
    }
return (restaurantData?.length===0)?<Shimmer/>:(
       <>
        <Header/>
       <div className='container'>
         {restaurantData?.map(e=> <Link to={'/restaurant/'+e.data.id} key={e?.data?.id} className="link-style"><Cards resData={e} /></Link>)}
         </div>
       </>
   )
};




export default Body;
