import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for (const teachers of cart) {
        total = total + teachers.salary;
    }
    return (
        <div>
            <h2>Teacher Added:{props.cart.length}</h2>
            <h2>Total Cost:${total}</h2>
        </div>
    );
};

export default Cart;