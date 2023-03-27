import React from 'react';
import './Products.css'
const Product = (props) => {
    const {img,name,price,ratings,seller}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>Product Name:{name}</h5>
            <p className='price'>Price:${price}</p>
            <p className='Menu'>Manufacturer :{seller}</p>
            <p className='rate'>Ratings :{ratings}</p>
            <button className='button'>AddTo Cart</button>
        </div>
    );
};
import './Products.css'
export default Product;