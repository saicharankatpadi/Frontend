import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";
import { removeRequests } from "../utils/requestSlice";

const Requests = ()=>{
    const requests = useSelector((store)=>store.requests);
    const dispatch = useDispatch();
    const reviewRequest = async(status,_id)=>{
       try{
         const res = await axios.post(BASE_URL+"/request/review/"+status+"/"+ _id,{},{
            withCredentials:true,

        });
        dispatch(removeRequests(_id));
    }catch(err){}
    };
    const getRequests = async()=>{
        const res = await axios.get(BASE_URL+"/user/requests/received",{withCredentials:true,});
        console.log(res);
        dispatch(addRequests(res.data.data))
    };
useEffect(()=>{
    getRequests();
},[]);
if(!requests) return;
if(requests.length === 0) return <h1>No requests Found</h1>
return(
    <>
    <div className="text-center space-y-4 ">
        <h1 className="font-bold text-3xl ">Connection Requests</h1>
  <div className="space-y-4">
    {requests.map((request)=>{
      const {firstName,lastName,photoUrl,age,gender,_id,about} = request.fromUserId;
      return(
        <div key={_id} className="flex items-center  p-4 rounded-lg bg-base-300 w-2/3
         mx-auto justify-between" >
            <div>
                <img  className="w-20 h-20 rounded-full"
                src={photoUrl} alt="photo"/>
                </div>
                <div className="text-left mx-4">
                    <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
                 {age && gender && <p>{age +","+gender}</p>}
                 <p>{about}</p>
                
                </div>
                  <div className="flex">
                   <button className="btn btn-primary mx-2"onClick={()=>(reviewRequest("accepted",request._id))}>ACCEPT</button>
                   <button className="btn btn-secondary mx-2"onClick={()=>(reviewRequest("rejected",request._id))}>REJECT</button>
                   </div>
                 </div>
       
     );
      })}
      </div>
    </div>
    </>
);
};
export default Requests;
