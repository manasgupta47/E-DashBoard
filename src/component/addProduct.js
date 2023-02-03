import React, { useState } from 'react'
const AddProduct =()=>{
  const[name,setName]=useState("")
  const[price,setPrice]=useState("")
  const[category,setCategory]=useState("")
  const[company,setCompany]=useState("")
  const[error,setError]=useState(false)
  const addProduct=async ()=>{
    if(!name || !price || !category || !company)
    {
      setError(true)
      return false;
    }
    const userId=JSON.parse(localStorage.getItem('user'))._id
    let result= await fetch("http://localhost:5001/add-product",{
      method:"POST",
      body:JSON.stringify({name,price,category,company,userId}),
      headers:{
        "Content-Type":"application/json"
      }
    })
     result=await result.json();
     console.log(result)
     alert("Product added successfully")
  }
  return(
    <div className='product'>
    <h1>Add Product</h1>
    <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Product Name' className='inputBox'/>
    {error && !name && <span className='invalidInput'>Enter Valid Name</span>}
    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="text" placeholder='Enter Product Price' className='inputBox'/>
    {error && !price && <span className='invalidInput'>Enter Valid Price</span>}
    <input value={category} onChange={(e)=>setCategory(e.target.value)} type="text" placeholder='Enter Product Category' className='inputBox'/>
    {error && !category && <span className='invalidInput'>Enter Valid Category</span>}
    <input value={company} onChange={(e)=>setCompany(e.target.value)} type="text" placeholder='Enter Product Company' className='inputBox'/>
    {error && !company && <span className='invalidInput'>Enter Valid Company</span>}
    <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>  
  )
}
export default AddProduct;