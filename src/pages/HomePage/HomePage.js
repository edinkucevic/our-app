import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

export default function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <>
      <div className="flex w-full justify-center mt-5 h-1/5 flex-row  ">
        <img
          className=" flex  w-11/20 h-1/5 "
          src="https://istyle.rs/media/oander/multislider/i/p/iphone_14_pro_desktop_banner_8.jpg"
          alt="slika"
        />
       
      </div>
    
      <div className="flex items-center mt-10 ml-96 justify-center border-2 w-52 h-10 border-white-100 rounded-3xl bg-black  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black ">
        <h3 className=" text-l font-extrabold   ">
          Najbolje u ponudi
        </h3>
      </div>
      
      <div className="flex justify-center items-center ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
            
          />
        ))}
      </div>
    </>
  );
}
