import {createBrowserRouter} from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
         {
          path:"/",
          element:<Home></Home>
         },
         {
          path:"/navbar",
          element:<Navbar></Navbar>
         },
         {
          path:"/footer",
          element:<Footer></Footer>
         }
    
]
     
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    } 
  
  ]);

export default router;