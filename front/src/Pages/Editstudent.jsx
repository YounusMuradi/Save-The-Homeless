import axios from "axios";
import React,{ useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

const Editstudent = () => {
  const {id}=useParams();
  const navigate = useNavigate();

  const clicktobackhandler = ()=>{
    navigate('/');
  }

  const [studentField, setstudentField] = useState({
  fullname: "", 
  email:"", 
  password:"",
  contact_number:"",
  address:"",
  typeOfassist:""
  });
  
  useEffect(()=>{
    fetchData();
  },[id])
  const fetchData = async()=>{
    try{
      const result = await axios.get("http://127.0.0.1:8000/api/students/"+id);
      // console.log(result.data.results);
      setstudentField(result.data.results);

    }catch(err){
      console.log("something went wrong");
    }
  }
  const changedonarFieldhandler = (e) => {
    setstudentField({
      ...studentField,
      [e.target.name]: e.target.value
    });
    console.log(studentField);
  }
  const onSubmitchange = async (e) =>{
    e.preventDefault();
    try{
      await axios.put("http://127.0.0.1:8000/api/studentupdate/"+id,studentField);
      navigate('/student');
    }catch(err){
      console.log("something went wrong");
    }
  }
    return(
   
        <div>
            <h1>Edit Form</h1>
            <form action="" className=" w-96 bg-backgorund">
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="fullname"
                placeholder="Full Name"
                value={studentField.fullname}
                onChange={e => changedonarFieldhandler(e)}
              />
              <input
                type="email"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="email"
                placeholder="Email"
                value={studentField.email}
                onChange={e => changedonarFieldhandler(e)}
              />
              <input
                type="password"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="password"
                placeholder="Password"
                value={studentField.password}
                onChange={e => changedonarFieldhandler(e)} 
              />
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="contact_number"
                placeholder="contact_number"
                value={studentField.contact_number}
                onChange={e => changedonarFieldhandler(e)} 
              />
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="address"
                placeholder="address"
                value={studentField.address}
                onChange={e => changedonarFieldhandler(e)} 
              />
              <input
                type="text"
                className="block border bg-backgorund border-black w-full p-3 rounded mb-1"
                name="typeOfassist"
                placeholder="typeOfassist"
                value={studentField.typeOfassist}
                onChange={e => changedonarFieldhandler(e)} 
              />
              <button type="submit" className="btn btn-primary" onClick={e=>onSubmitchange(e)}>Update</button>
              </form>

              <div>
                <button onClick={clicktobackhandler}>back to home</button>
              </div>
        </div>
    )
}
export default Editstudent;