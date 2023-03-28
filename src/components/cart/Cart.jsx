import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {

    // total price
    let totalPrice = 0;
    let totalShipping = 0;    
    for(const product of cart){
       totalPrice = totalPrice + product.price;
       totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal =totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
          <h3 className='order'>Order Summury</h3>
                <p className='order'>Cart-Items:{cart.length}</p>
                <p className='order'>Total Price:${totalPrice.toFixed(2)}</p>
                <p className='order'>Total Shipping :{totalShipping.toFixed(2)}</p>
                <p className='order'>Tax:${tax.toFixed(2)}</p>
                <p className='order'>Grand Total :${grandTotal.toFixed(2)}</p>   
        </div>
    );
};

export default Cart;