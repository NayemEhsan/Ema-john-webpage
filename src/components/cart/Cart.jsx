import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {

    // total price
    let totalPrice = 0;
    let totalShipping = 0;   
    let quantity = 0; 
    for(const product of cart){
        // if(product.quantity===0){
        //     product.quantity =1;
        // }
        // product.quantity = product.quantity || 1;
       totalPrice = totalPrice + product.price * product.quantity;
       totalShipping = totalShipping + product.shipping;
       quantity = quantity + product.quantity;
    }
    const tax = totalPrice*7/100;
    const grandTotal =totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
          <h6 className='ordered'>Order cart</h6>
          <br className='break' />
                
                <p className='order'>Cart-Items:{quantity}</p>
                <p className='order'>Total Price:${totalPrice.toFixed(2)}</p>
                <p className='order'>Total Shipping :{totalShipping.toFixed(2)}</p>
                <p className='order'>Tax:${tax.toFixed(2)}</p>
                <p className='order'>Grand Total :${grandTotal.toFixed(2)}</p>   
        </div>
    );
};

export default Cart;