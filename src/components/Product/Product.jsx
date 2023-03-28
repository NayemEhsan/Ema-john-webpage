import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Product = (props) => {
    const {img,name,price,ratings,seller}=props.product;

    const handleAddToCart =props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5 className='product-name'>Product Name:{name}</h5>
            <p className='price'>Price:${price}</p>
            <p className='Menu'>Manufacturer :{seller}</p>
            <p className='rate'>Ratings :{ratings}</p>
            <button onClick={()=>handleAddToCart(props.product)} className='button'>
                AddTo Cart 
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};
import './Products.css'
export default Product;