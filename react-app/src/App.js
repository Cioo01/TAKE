import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, createBrowserRouter,RouterProvider } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const products = response.data.products;
        setProducts(products);
      })
      .catch(error => console.error("There was an error!", error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} key={products.id}/>,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;