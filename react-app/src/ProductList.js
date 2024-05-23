import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
    const [filter, setFilter] = useState('');

    return (
        <div> 
            <h1>List of products</h1>
            <label>Filter by product title:</label>
            <input type="text" value={filter} onChange={e => setFilter(e.target.value)} />  
            <ul>
            {products.filter(product => product.title.toLowerCase().includes(filter.toLowerCase())).map(product => ( <ProductItem key={product.id} id={product.id} title={product.title} brand={product.brand} /> ))}
            </ul>
        </div>
    );
};

function ProductItem({ id, title, brand }) {
    return (
      <li>
        <Link to={`/details/${id}`}>{title}</Link> ({brand})
      </li>
    );
}

export default ProductList;