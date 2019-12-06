import React from 'react';
import './Info.css';

function Info(props) {
    const { name, entries } = props;

    return (
        <h2 className='text-white text-center'>
            {name}, you have merged {entries} face(s)
        </h2>
    )
}

export default Info;