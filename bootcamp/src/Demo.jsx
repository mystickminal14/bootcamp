import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Demo() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {products &&
        products.map((data, id) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <h3>Some additional content here</h3>
          </div>
        ))}
    </>
  );
}
