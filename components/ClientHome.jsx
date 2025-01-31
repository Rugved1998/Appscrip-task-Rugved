"use client";

import { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import ProductList from "./ProductList";
import FilterOptions from "./FilterOptions";
import styles from "../src/app/page.module.css";

export default function ClientHome() {
  const [products, setProducts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [isFilterVisible, setIsFilterVisible] = useState(false);

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
  }, []);

  return (
    <div>
      <FilterBar
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
        isFilterVisible={isFilterVisible}
        setIsFilterVisible={setIsFilterVisible}
      />
      <div className="flex">
        {isFilterVisible && (
          <div className="w-1/4 p-4 bg-gray-100">
            <FilterOptions />
          </div>
        )}
        <div
          className={`flex-1 transition-all duration-300 ${
            isFilterVisible ? "ml-4" : ""
          }`}
        >
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

