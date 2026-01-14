"use client"

import NavBar from "@/components/navbar"
import SideBar from "@/components/sideBar"
import ProductCard from "@/components/productCard";
import { useProduct } from "@/context/productContext";

const Page = () => {

  const { product } = useProduct()

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar name={"My Products"} />

      <div className="flex flex-1">
        <SideBar />

        <div className="flex flex-1 flex-wrap gap-10 p-10 mx-10">
          {product.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default Page
