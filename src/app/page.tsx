import { Catamaran } from "next/font/google";
import Banner from "./Components/Banner/Banner";
import TodaysDeal from "./Components/TodaysDeal/TodaysDeal";
import CategoryHeader from "./Components/CategoryHeader/CategoryHeader";
import { CartProvider } from '@/app/Context/CartPrdctContext';

export default function Home() {
  return (
    <>
 <CartProvider>
     <CategoryHeader/>
      <Banner/>
     
      <TodaysDeal/>
     
    </CartProvider>
    </>
  );
}



