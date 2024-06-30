"use client"
import AddToCart from "@/app/Components/addToCart/AddToCart";
import { ProductContext } from "@/app/Context/ProductContext";
import Link from "next/link";

async function ProductDetail(props:any) {
    let productId=props.params.ProductId;
    const productDet=await ProductContext.getProductById(productId);
    console.log("productdetail page",productDet);
    return ( <>
     <div className='col-md-6 mt-3'>
                <img src={productDet.image.url} alt={productDet.name} height={400} width={300}/>
            </div>
            <div className='col-md-6 mt-4 p-4 mb-3'>
                
                <h1 className='display-5'>{productDet.name}
                </h1>
                <h4 className='text-uppercase text-info'>
                    {productDet.categories[0].slug}
                </h4>
                <h3 className='display-6 fw=bolder my-5'>${productDet.price.raw}</h3>
               <p className='lead'>{productDet.description}</p>
               <AddToCart prodId={productDet.id}/>
               <Link href="/Cart" className="btn btn-outline-dark me-2 ">GO TO CART</Link>
            </div>
    </> );
}

export default ProductDetail;