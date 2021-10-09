import * as React from 'react';
import s from './Tag.module.css';


function Tag(props) {
    return (
        <div className={s.container}>
            {props.text}:
        </div>

    );
}

export default Tag;
