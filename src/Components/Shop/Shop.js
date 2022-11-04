import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart =(sendProps) =>{
        console.log(sendProps);
        const newCart = [...cart,sendProps];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                    {/* <h3>This is for product: {products.length}</h3> */}
                    {
                        products.map(product =><Product 
                            sendProps ={product}
                            key={product.key}
                            returnHandleAddToCart={handleAddToCart}>
                            </Product>)
                    }
            </div>
            <div className="cart-container">
                    <h4>This is for cart</h4>
                    <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;