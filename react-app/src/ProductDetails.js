import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.filter(product => product.id.toString() === id);

  if (product.length === 0) {
    return null;
  }

  const { title, category, brand, description, price, thumbnail } = product[0];

  return (
    <div>
      <h1>{title}</h1>
      <p>Category: {category}<br />
         Brand: {brand}<br />
         Description: {description}<br />
         Price: ${price}</p>
      <img src={thumbnail} alt={title} />
      <br />
      <Link to="/">Back to products list</Link>
    </div>
  );
};

export default ProductDetail;