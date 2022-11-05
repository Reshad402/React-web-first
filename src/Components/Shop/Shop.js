import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])    //! One part is declare the set of products
    const [cart, setCart] = useState([])            //!Second part is the set of change of cart items

    useEffect(() => {                               //!Taking the products list as JSON file
        fetch('products.json')                      //!From the products.json file
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart =(sendProps) =>{          //! This is called in the line 25;
        console.log(sendProps);
        const newCart = [...cart,sendProps];        //! Declaring the new array list
        setCart(newCart)                            
    }
     ////////!!------------------------Return Part of the function--------------------------------------------------------
    return (
        <div className='shop-container'>
            <div className="products-container">
                    {/* <h3>This is for product: {products.length}</h3> */}
                    {
                        products.map(product =><Product         //!products is declared from the useState
                            sendProps ={product}                //!product is declared as variable and sendProps is just name to use other function
                            key={product.key}                   //! Unique key is declared =>var.key
                            returnHandleAddToCart={handleAddToCart}         //!Declaring the cart function and 
                            >        
                            </Product>)
                    }
            </div>
            {/* //! This is the another state part */}
            <div className="cart-container">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;