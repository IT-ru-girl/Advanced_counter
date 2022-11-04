import React from 'react';
import b from '../Button.module.css';

type ButtonPropsType ={
    onClick: ()=> void
    name:string
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = ()=>{
        props.onClick()
    }
    return (
        <div className={b.mainBtn}>
            <button  className={b.btn1} onClick={onClickHandler}>{props.name}</button>
        </div>
    );
};

export default Button;