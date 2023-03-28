import React, { useEffect, useState } from 'react';
import { addToDb , getShoppingCart} from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[]);
   


    // local storage related .................
    useEffect(() => {
     const storedCart =getShoppingCart();
     const savedCart =[];
    //  step 1: get id
    // step no 2 : get the product using id
    // step np 3 : get quantity of the product
    // step 4 : add the addedProduct to the saved cart
    // step 5:set the cart
    for(const id in storedCart){
       
        const addedProduct = products.find(product =>product.id ===id );      
        if (addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity =quantity;
            savedCart.push(addedProduct);
            // console.log(addedProduct);
        }
    }
    setCart(savedCart);

     
    },[products])
    // local storage close
     
    const handleAddToCart =(product)=>{
        let newCart = [];

        // const newCart =[...cart,product];
        // if product doesn't exist in the cart,then set quantity =1
        // if product exist update quantity by 1

        const exists = cart.find(pd =>pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart,product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd =>pd.id !== product.id);
            newCart = [...remaining,exists];
        }

        setCart(newCart);
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                    key= {product.id}
                    product= {product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;