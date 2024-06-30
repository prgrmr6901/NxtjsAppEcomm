"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { useCart } from '../Context/CartPrdctContext'

const Cart=() =>{
  //remove cart item
  const {setCartItems}=useCart()
  const [cartProducts ,setCartProducts] = useState([]);
  const removeCartItem=async(prodId:string)=>{
    try{
      const resp=await ProductContext.removeCartItem(prodId);
      setCartProducts(resp);
    setCartItems(resp.line_items);
    }catch(error){
      console.error("error occur in remove cart",error);
    }

  }
  const [fetchCartProducts, setFetchCartProducts] = useState<any>();
  //fetch cart products
  useEffect(()=>{
    const fetchingCartProducts=async()=>{
      try{
        const responce= await ProductContext.fetchingCartProducts()
        setFetchCartProducts(responce.line_items)
        console.log("fetch cart products",responce.line_items)
      }catch(error){
        console.error("error occur in fetching cart",error);
      }
    };
    fetchingCartProducts();
  },[cartProducts] );
  const updateCart = async (pr:any,qty:number) => {
  
    try {
       const response = await fetch(`https://api.chec.io/v1/carts/cart_0egY5em3kV53Qn/items/${pr}`, {
        method: "PUT",
        headers: {
            "X-Authorization": "pk_57440ae235fcd2d147bf5dfe3f9f04522e5eb8b2244de",
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            id:pr,
            quantity: qty
        })
    })
        const data = await response.json();
        console.log('update cart put',data);
        setCartProducts(data)
         } catch (error) {
        console.error('An error occurred:', error);
    }
  };

  return (
    <div>
       <div style={{minHeight:390}} className='mt-3 mb-3'>
          <h6 style={{textAlign:'center',borderBottom:'1px solid lightgray',color:'rgb(41, 41, 65)'}} className="container fw-bold fs-3">Shopping Cart</h6>
              {
                  fetchCartProducts?.length === 0 ? (
                      <div className='d-flex justify-content-center align-items-center' style={{minHeight:'30vh'}}>
                        <span className='fs-5 fw-normal opacity-50'>cart is empty</span>
                      </div>
                  ):
                  fetchCartProducts?.map((c:any) =>{
                      return (
                          <>
                              <div>
                                  
                                  <div style={{textAlign:'center',borderBottom:'1px solid lightgray'}} className='container d-flex flex-wrap justify-content-center pt-2 pb-3'>
                                      <div className='col-1'>
                                          <img src={c.image.url}height={60}/>
                                      </div>
                                      <div  className='col-5'>
                                          <h6 className='pt-3 ps-2'>{c.name}</h6>
                                      </div>
                                      <div className='col pt-3 fw-semibold'>
                                          Quantity - {c.quantity}
                                      </div>
                                      <div className="col">
                                        <button className="btn btn-success mt-2 fw-semibol" onClick={()=>{updateCart(c.id,c.quantity + 1)}}>
                                              +
                                           </button>
                                        </div>
                                        <div className="col">
                                        <button className="btn btn-danger  mt-2 fw-semibol" onClick={()=>{updateCart(c.id,c.quantity - 1)}}>
                                              -
                                           </button>
                                        </div>
                                      <div className='col-2'>
                                          <button className='btn btn-danger mt-2 fw-semibol' onClick={()=>removeCartItem(c.id)}>Remove</button>
                                      </div>
                                      <div className='col pt-3'>
                                          <span className="fw-semibold">$ {c.quantity * c.price.raw}</span>
                                      </div>
                                  </div>                    
                              </div>
                          </>      
                      )  
                  })
              }
             
            
      </div>
    </div>
  )
}

export default Cart
