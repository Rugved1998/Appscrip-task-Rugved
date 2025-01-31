"use client";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import styles from "../src/app/page.module.css";

export default function ProductList({ products }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className={`${styles.grid} ${isMobile ? styles.gridCols2 : styles.gridCols4}`}

    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
