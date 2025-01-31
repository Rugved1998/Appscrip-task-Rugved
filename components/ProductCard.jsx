import { useState, useEffect } from "react";
import Image from "next/image";




export default function ProductCard({ product }) {
    const [isHeartFilled, setIsHeartFilled] = useState(false);
  return (
    <div className="border p-4 text-center shadow-md rounded-md">
      <Image
        src={product.image}
        alt={product.title}
        width={150}
        height={150}
        priority
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
       <p>{"Sign in or Create an account to see pricing"}</p>
         
              <Image src={`${isHeartFilled? "/Images/heartFilled.png":"/Images/heart.png"}`}
            alt="Heart"
            width={24}
            height={24}
            priority
            onClick={() => setIsHeartFilled(!isHeartFilled)}
            />
    </div>
  );
}
