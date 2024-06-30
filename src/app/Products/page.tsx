import React from 'react'
import ProductList from '../Components/ProductList/ProductList';
import { ProductContext } from '@/app/Context/ProductContext';
import FilterOption from '../Components/Filter/Filter';


async function Products() {

  const data = await ProductContext.getProducts();  

  return (
    <div className='row'>
      <div className='col-1'>
        <FilterOption/>
      </div>
      <div className='col-11'>
        <ProductList data={data}/>
      </div>
    </div>
  )
}

export default Products;