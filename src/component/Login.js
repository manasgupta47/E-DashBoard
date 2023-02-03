import React,{useEffect, useState} from "react";
import {useNavigate} from "react-router-dom"
const Login=()=>{
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate();
  useEffect(()=>{
const auth=localStorage.getItem("user")
if(auth)
navigate(" /")
  },[])
  const logindata=async()=>{
    console.warn(email,password);
    let result=await fetch("http://localhost:5001/login",{
      method:'POST',
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type": 'application/json'
      }
    })
    result = await result.json()
    console.log(result)
    if(result.name){
      localStorage.setItem("user",JSON.stringify(result))
      navigate("/");
    }
    else{
      alert("Please Provide Valid Details")
    }
  }
  return(
<div className="login">
  <h1>Login</h1>
  <input onChange={(e)=>setEmail(e.target.value)} value={email} className="inputBox" type="text" placeholder="Enter Email"></input>
  <input onChange={(e)=>setPassword(e.target.value)} value={password} className="inputBox" type="password" placeholder="Enter Password"></input>
  <button onClick={logindata} className="appButton" type="button">Login</button>
</div>
  );
}
export default Login;