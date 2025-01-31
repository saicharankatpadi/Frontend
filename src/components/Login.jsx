import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice"; 
import { useNavigate } from "react-router-dom";
import {BASE_URL} from "../utils/constants";
const Login = ()=>{
    const [emailId,setEmailID] = useState("");
    const [password,setPassword] = useState("");
    const [error , setError] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [isLoginForm, setisLoginForm] = useState(true);
    const dispatch  =  useDispatch();
    const navigate = useNavigate();

    const handleSignup = async () =>{
      try{
      const res = await axios.post(BASE_URL+"/signup",{
        firstName,
        lastName,
        emailId,
        password,
      },{withCredentials:true,});
      dispatch(addUser(res.data.data));
       return navigate("/profile");
    }catch(err){
        setError(err.res.data);
    }
    };

    const handleLogin = async() =>{
        try{
            const res = await axios.post(BASE_URL+"/login",{
                emailId,
                password,
            },{withCredentials:true} );
            dispatch(addUser(res.data));
            return navigate("/");
        }  catch(err){
          setError(err?.response?.data);
      }
        } ;
    return(
        <div className="flex justify-center my-4">
        <div className="card bg-base-300 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm?"Login":"Signup"}</h2>
          
          {! isLoginForm && <div> <label className="form-control w-full max-w-xs my-2">
        <div className="label">
    <span className="label-text">FirstName:</span>
  </div>
  <input type="text" 
   value={firstName}
  className="input input-bordered w-full max-w-xs"
  onChange={(e)=>setFirstName(e.target.value)} />
   </label>
   <label className="form-control w-full max-w-xs my-2">
     <div className="label">
    <span className="label-text">LastName:</span>
  </div>
  <input type="text" 
   value={lastName}
  className="input input-bordered w-full max-w-xs"
  onChange={(e)=>setLastName(e.target.value)} />
   </label>
   </div>}
          <label className="form-control w-full max-w-xs my-2">
     <div className="label">
    <span className="label-text">EmailId</span>
  </div>
  <input type="text"
   value={emailId}
   className="input input-bordered w-full max-w-xs" 
    onChange={(e)=>setEmailID(e.target.value)}/>
   
    </label>
    <label className="form-control w-full max-w-xs my-2">
     <div className="label">
    <span className="label-text">Password</span>
  </div>
  <input type="password" 
   value={password}
  className="input input-bordered w-full max-w-xs"
  onChange={(e)=>setPassword(e.target.value)} />
   </label>
          
          <p className="text-red-300">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary justify-center" onClick={isLoginForm?handleLogin:handleSignup}>{isLoginForm?"Login":"Signup"}</button>
          </div>
          <p className="m-auto cursor-pointer py-2" onClick={()=>setisLoginForm((value)=>!value)}>
              {isLoginForm ? "New user signUp here":"Existing user login here"}
        </p>
        </div>
      </div>
      </div>
    )
}
export default Login;