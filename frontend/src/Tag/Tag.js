import * as React from 'react';
import s from './Tag.module.css';


function Tag(props) {
    return (
        <div className={s.container}>
            {props.text}: {props.inf !== null ? props.inf : "none"}
        </div>

    );
}

export default Tag;
