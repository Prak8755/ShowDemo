import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar } from './components/Body';
import Body from './components/Body';
import { Outlet, Router, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Offers from './components/Offers';
import Help from './components/Help';
import Cart from './components/Cart';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';


const root=ReactDOM.createRoot(document.getElementById('root'));



const App=function(){
    return(
        <>
       <Navbar/>
       <Outlet/>
        </>
    )
};

const appRouter=createBrowserRouter([
    {path:'/',
    element:<App/>,
    errorElement:<Error/>,
    children:[
    {
        path:'/',
        element:<Body/>,
    },
{
    path:'/offers',
    element:<Offers/>
},
{
    path:'/help',
    element:<Help/>
},
{
    path:'/cart',
    element:<Cart/>
},
{
    path:'/restaurant/:id',
    element:<RestaurantMenu/>
}
]
     
}
    
]);

root.render(<RouterProvider router={appRouter}/>)



