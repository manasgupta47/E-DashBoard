import React,{useEffect, useState} from "react";
import {Link} from 'react-router-dom'
const ProductList=()=>{
  const [products,setProducts]=useState([]);
  useEffect(()=>{
   getProduct(); 
  },[])
  const getProduct=async ()=>{
    let result = await fetch("http://localhost:5001/products")
    result =await result.json()
    setProducts(result)
  }  
const deleteProduct=async (id)=>{
    let result = await fetch(`http://localhost:5001/product/${id}`,{
      method:"Delete"
    })
    result=await result.json()
    if(result){
      getProduct()
    }

}
const searchHandle=async (event)=>{
  let key=event.target.value
  if(key){
    let result=await fetch(`http://localhost:5001/search/${key}`)
    result=await result.json()
    if(result){
      setProducts(result)
    }
  }
  else{
    getProduct()
  }
}
  return(
    <div className="product-list">
      <h1>Product List</h1>
      <input type="text" className="search-product-box" placeholder="search-Product" onChange={searchHandle}/>
      <ul>
        <li>S. No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Company</li>
        <li>Category</li>
        <li>Operations</li>
        
      </ul>
      {
      products.length>0 ?  products.map((item,index)=>
        <ul key={item._id}>
        <li>{index+1}</li>
        <li>{item.name}</li>
        <li>{item.price}</li>
        <li>{item.company}</li>
        <li>{item.category}</li>
        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
        <Link  to={'/update/'+item._id}>Update</Link></li>
        
      </ul>
        )
        : <h1>No Product Found</h1>
      }
    </div>
  )
}
export default ProductList;