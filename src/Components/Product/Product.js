import React from 'react';
import './Product.css'

const Product = (props) => {

    // console.log(props)
    

    //? As data obj hisebe ase so amra obj declar korlam

    const {name,img,price,ratings,seller} = props.sendProps;     //?Show.js theke product pathano hoiche

    return (
        <div className='product'>
             <img src={img} alt="" />
            <div className='price'>
                <p className='product-info'>{name}</p>
                <h5>Price: ${price}</h5>
                <h5>Manufacture: {seller}</h5>
                <h5>Rating: {ratings} Stars</h5>
            </div>
            
            <button onClick={() => props.returnHandleAddToCart(props.sendProps)} className='btn' >
                <p >Add to cart</p>
            </button>    
        </div>
    );
};

export default Product;