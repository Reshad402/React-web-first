import React from 'react';
import '../Cart/Cart.css'
const Cart = ({cart}) => {      //? Cart অবশ্যই সেকেন্ড ব্র্যাকেট এর মধ্যে রাখতে হবে
    console.log(cart);
                            //! This is came from here
                                    //? const Cart = (props) =>{
                                    //?    const {cart} = props}
                                    //!}


                            //?টোটাল খরচ বের করা হয়েছে
        let total = 0;
        for(const product of cart){                 //!Cart মধ্যে যতগুলো product হয়েছে তাকে লোড করব
            total = total+ product.price;
        }                            
                            //? Shipping cost added
        let shipping=0;
        for (const product of cart){
            shipping = shipping+ product.shipping;
        }
        
                            //?Tax amount added

        const tax = total*.10;
           const grandTotal = tax + shipping+ total;

    return (
        <div className='cart'>
                            {/* <Cart cart={cart}></Cart>   */}
                <h4 >Order Summery</h4>
                <p>Selected items: {cart.length}</p>
                <p>Total price :{total}</p>
                <p>Total Shipping:{shipping}</p>
                <p>Tax:{tax}</p>
                <h5>Grand total:{grandTotal}</h5>
        </div>
    );
};

export default Cart;