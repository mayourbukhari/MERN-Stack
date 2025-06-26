import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <li className="shadow-lg w-40 m-4 rounded-2xl list-none">
            <img src={product.image} alt={product.title} className="h-50" />
            <h1>{product.title}</h1>
            <p>{product.price}</p>
          </li>
        </Link>
      ))}
    </div>
  );
}
