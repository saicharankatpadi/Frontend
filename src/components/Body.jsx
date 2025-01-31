import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Body = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchUser = async()=>{
     
        try{
        const res = await axios.get(BASE_URL+"/profile/view",{
            withCredentials:true,
        });
        dispatch(addUser(res.data));
    }catch(err){
        if(err.status === 401){
            return navigate("/login");
        }
        console.err(err);
    }
    };
    useEffect(()=>{
        fetchUser();
    },[]);

    return( 
        <div>
             <NavBar/>
             <Outlet/>
             <Footer/>
        </div>
    

    )
}
export default Body;