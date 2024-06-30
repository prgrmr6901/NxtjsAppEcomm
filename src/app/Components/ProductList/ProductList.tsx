import Link from 'next/link'
import React from 'react'

function ProductList(props:any) {
    const products = props.data
    
  return (
    <div className='d-flex flex-wrap justify-content-start gap-4 mt-5 mb-5'>
        {
            products?.map((p:any)=>{
                return (
                    <Link href={'/Products/'+p.id} style={{textDecoration:'none'}}>
                        <div className="prod-container d-flex flex-column justify-content-evenly mt-2">
                            <div className='text-center'><img src={p.image.url} style={{height:'190px'}}/></div>
                            <div className='text-center'><h6 className='text-black'>{p.name}</h6></div>
                            <div className='text-center'><span className="prod-des">{p.description}</span></div>
                            <div className='text-center'><span className='fw-bold text-success fs-4'>₹{p.price.formatted}</span> <del className='text-secondary fw-normal'>{p.price.raw+1000}</del></div>
                            <div className='text-center'><span className='text-warning fw-semibold'>Deal of the day</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-danger fw-bold'>Save 30%</span></div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default ProductList