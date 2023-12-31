import React, { useEffect, useState } from "react";
import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

const Viewstudent = () => {
    const {id}=useParams();
    

 const[data, setData]=useState([]);
   const navigates = useNavigate();
    useEffect(()=>{
        fetchData();
    },{id});
    const fetchData = async()=>{
        try{
        const result = await axios.get("http://127.0.0.1:8000/api/students/"+id);
         setData(result.data.results);
        }catch(err){
            console.log("Something went wrong");
        }
    }
    const clickTobackhandler=()=>{
        navigates('/student');
    }
    return <div>
        <div className="container">
            <div className="row">
               <div className="col-md-12">

                   <h1>Donar Details</h1>
                   <table class="min-w-full w-full text-left border border-black  rounded-sm text-sm font-light"> 
                    <thead class="border-b  font-medium dark:border-neutral-500">
                        <tr>
                            <th scope="col" class="px-6 py-4">S No.</th>
                            <th scope="col" class="px-6 py-4">Full name</th>
                            <th scope="col" class="px-6 py-4">Email</th>
                            <th scope="col" class="px-6 py-4">Contact_number</th>
                            <th scope="col" class="px-6 py-4">address</th>
                            <th scope="col" class="px-6 py-4">Type of assist</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.id}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.fullname}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.email}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.contact_number}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.address}</td>
                            <td class="whitespace-nowrap px-6 py-4 font-medium">{data.typeOfassist}</td>

                        </tr>
                    </tbody>
                   </table>
                </div>                
            </div>
        </div>
        <div className="container d-flex justify-content-center">
            <div><button className="btn btn-danger mx-2" onClick={clickTobackhandler}>back to home</button></div>
        </div>
    </div>
};

export default Viewstudent;