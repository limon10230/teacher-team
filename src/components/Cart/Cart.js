import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const icon = <FontAwesomeIcon icon={faUser} />
    const { cart } = props;
    let total = 0;
    for (const teachers of cart) {
        total = total + teachers.salary;
    }
    let teacherName = [];
    for (const teachers of cart) {
        teacherName = teacherName + teachers.name;
    }
    return (
        <div>
            <h2>{icon} Teachers Added:{props.cart.length}</h2>
            <h2>Total Cost:${total}</h2>
            <h2>Added Teachers name:{teacherName}</h2>

        </div>
    );
};

export default Cart;