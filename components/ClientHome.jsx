"use client";

import { useState, useEffect } from "react";

import styles from "../src/app/page.module.css";
import ProductList from "./ProductList";


export default function ClientHome() {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      
     <ProductList products={products} />
        
      </div>
    
  );
}
