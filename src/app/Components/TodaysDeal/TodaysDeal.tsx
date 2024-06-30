import { ProductContext } from '@/app/Context/ProductContext'
import React from 'react'


async function TodaysDeal() {

  const products = await ProductContext.getProducts();

  return (
    <>
        <div className='ps-5 mt-4 pb-3 '>
            <span className='fw-bold fs-4 text-dark'>Todays Deal</span>
        </div>
        <div className='d-flex flex-wrap justify-content-center gap-5 mb-5'>
            {
                products.map((p:any)=>{
                    return(
                        <div className='d-flex flex-column justify-content-evenly todays-deal p-2'>
                            <div className='text-center'><img src={p.image.url} height={150} width={150}/></div>
                            <div className='text-center'><span>{p.name}</span></div>
                            <div className='text-center'><span className='text-danger fw-semibold'>Todays Deal</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-success fw-bold'>Save 30%</span></div>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default TodaysDeal