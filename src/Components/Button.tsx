import React from 'react';
import b from '../Button.module.css';

type ButtonPropsType ={
    onClick: ()=> void
    name:string
    disabled?: boolean
}

const Button = (props: ButtonPropsType) => {
    const onClickHandler = ()=>{
        props.onClick()
    }
    return (
        <div className={b.mainBtn}>
            <button disabled={props.disabled && props.disabled}
                    className={b.btn1}
                    onClick={onClickHandler}>
                {props.name}
            </button>
        </div>
    );
};

export default Button;