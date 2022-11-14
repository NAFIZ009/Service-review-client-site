import { createBrowserRouter } from "react-router-dom";
import Services from "../../Pages/Services/Services";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ErrorPage from "../../Component/ErrorPage/ErrorPage";
import PrivetRoute from "../../Component/PrivetRoute/PrivetRoute";
import ServiceAdd from "../../Pages/ServiceAdd/ServiceAdd";
import IndService from "../../Component/IndividualService/IndService";


const Router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:async()=>{
                   return await fetch('http://localhost:5000/services',{
                        headers:{
                            path:'home'
                        }}).then(res=>res.json()).then(data=>data).catch()
                    
                },
                element:<Home></Home>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                loader:async()=>{
                   return await fetch('http://localhost:5000/services')
                    .then(res=>res.json())
                    .then(data=>{return data})
                    .catch()
                },
                element:<Services></Services>
            },
            {
                path:'/services/:id',
                loader:async({params})=>{
                   return await fetch(`http://localhost:5000/services/${params.id}`)
                    .then(res=>res.json())
                    .then(data=>{return data})
                    .catch()
                },
                element:<IndService></IndService>
            },
            {
                path:'/reviews/:email',
                loader:async({params})=>{
                    return await fetch(`http://localhost:5000/review/${params.email}`)
                    .then(res=>res.json())
                    .then(data=>{return data})
                    .catch()
                },
                element:<PrivetRoute><MyReviews></MyReviews></PrivetRoute>
            },
            {
                path:'/addservice/:email',
                element:<PrivetRoute><ServiceAdd></ServiceAdd></PrivetRoute>
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
]);

export default Router;