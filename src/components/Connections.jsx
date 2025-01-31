import axios from "axios"
import { BASE_URL } from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { useEffect } from "react";

const Connections = () =>{
    const connections = useSelector((store)=>store.connections);
    const dispatch = useDispatch();

    const getConnections = async()=>{
        try{
        const res = await axios.get(BASE_URL + "/user/connections",{
            withCredentials:true,
        });
        dispatch(addConnections(res?.data?.data));
    }catch(err){
        //handling the error
    }
    };
    useEffect(()=>{
        getConnections();
    },[]);
    if(!connections) return;
    if(connections.length === 0) return <h1>No connections found</h1>
    return(
        <>
        <div className="text-center ">
            <h1 className="font-bold text-3xl">Connections</h1>
        {connections.map((connection)=>{
          const {firstName,lastName,photoUrl,age,gender,_id,about} = connection;
          return(
            <div key={_id} className="flex m-4 p-4 rounded-lg bg-base-300 w-2/3
             mx-auto" >
                <div>
                    <img  className="w-20 h-20 rounded-full"
                    src={photoUrl} alt="photo"/>
                    </div>
                    <div className="text-left mx-4">
                        <h2 className="font-bold text-xl">{firstName+" "+lastName}</h2>
                     {age && gender && <p>{age +","+gender}</p>}
                     <p>{about}</p>
                    </div>
            </div>
         );
          })}
        </div>
        </>
    );
}
export default Connections;