import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Teachers from '../Teachers';
import './TopTeacher.css'


const TopTeacher = () => {
    const [teacher, setTeacher] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./teacher.JSON')
            .then(res => res.json())
            .then(data => setTeacher(data))
    }, [])

    const haldleInvite = (teachers) => {
        const newCart = [...cart, teachers];
        setCart(newCart)
    }
    return (
        <div className='teacher-container'>
            <div className='top-teacher-container'>

                {
                    teacher.map(teachers => <Teachers
                        key={teachers.key}
                        teachers={teachers}
                        haldleInvite={haldleInvite}

                    >

                    </Teachers>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default TopTeacher;