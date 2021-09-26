import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

import './Teachers.css'

const Teachers = (props) => {
    // console.log(props)
    const { name, school, subject, salary, img } = props.teachers;
    const element = <FontAwesomeIcon icon={faHandHoldingUsd} />

    return (
        <div className='teachers'>
            <img className='teachers-img' src={img} alt="" />
            <h2> Name:{name}</h2>
            <h4>School:{school}</h4>
            <h4>Subject:{subject}</h4>
            <h4>Salary:{salary}</h4>
            <button onClick={() => props.haldleInvite(props.teachers)} className='teachers-button'>{element} Invited</button>
        </div>
    );
};

export default Teachers;