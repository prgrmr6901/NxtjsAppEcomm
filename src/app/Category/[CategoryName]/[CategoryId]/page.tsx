import { ProductContext } from '@/app/Context/ProductContext';
import Link from 'next/link';
import React from 'react'

async function CategoryPage(props:any) {

    const categoryId = props.params.CategoryId;
    const categoryName = await ProductContext.getCategory(categoryId);
    const data = await ProductContext.getProducts();  
    
    const filteredProducts = data.filter((d:any) => {
        return d.categories[0]?.slug === categoryName;
    });
    

  return (
    <>
    <div className='mt-4 mb-2 ps-5 fw-semibold fs-2 text-danger text-uppercase text-center'>{categoryName}</div>
    <div className='d-flex flex-wrap justify-content-center gap-4  mb-5'>
        {
            filteredProducts.map((f:any) => {
                return (
                    <Link href={'/Products/'+f.id} style={{textDecoration:'none'}}>
                        <div className="prod-container d-flex flex-column justify-content-evenly mt-2">
                            <div className='text-center'><img src={f.image.url} style={{height:'190px'}}/></div>
                            <div className='text-center'><h6 className='text-black'>{f.name}</h6></div>
                            <div className='text-center'><span className="prod-des">{f.description}</span></div>
                            <div className='text-center'><span className='fw-bold text-success fs-4'>₹{f.price.formatted}</span> <del className='text-secondary fw-normal'>{f.price.raw+1000}</del></div>
                            <div className='text-center'><span className='text-warning fw-semibold'>Deal of the day</span></div>
                            <div className='text-center'><span className='rounded-1 p-1 text-danger fw-bold'>Save 30%</span></div>
                        </div>
                    </Link>
                )
            })
        }
    </div>
    </>
  )
}

export default CategoryPage