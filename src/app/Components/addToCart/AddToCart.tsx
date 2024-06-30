
"use client";
import { useState } from "react";
import { useCart } from "@/app/Context/CartPrdctContext";
import { ProductContext } from "@/app/Context/ProductContext";

const AddToCart = (props: any) => {
    console.log("add to cart props", props);
    const { setCartItems, setCartCount, cartCount } = useCart();
    const [showMessage, setShowMessage] = useState(false);

    const addTocart = async (prodId: any) => {
        try {
            const response = await ProductContext.addToCart(prodId);
            const data = await response.json();
            setCartItems(data.line_items);
            setCartCount(cartCount + 1);
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
        } catch (error) {
            console.error("add to cart error", error);
        }
    };

    return (
        <div>
          <button
            className="btn btn-primary fw-semibold"
            onClick={() => addTocart(props.prodId)}
          >
            Add To Cart
          </button>
          {showMessage && (
            <span className="text-success ms-2">Item added Successfully!!!!!</span>
          )}
        </div>
      );
    };
    
    export default AddToCart;
    
