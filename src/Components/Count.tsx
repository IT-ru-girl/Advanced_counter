import React from 'react';
import s from '../App.module.css';
import Button from './Button';
import b from '../Button.module.css';



type CountPropsType ={
    changeNum: ()=> void
    resetNum: ()=> void
    num: number
    maxValue: number
    inpMax: number
    inpMin:number
    setError: (error:string)=>void
    error: string
}



const Count = (props: CountPropsType) => {

    const finalClassName = `${s.counterDisplay} + ${props.num === props.maxValue || props.num === props.inpMax? s.error : s.num} +${props.inpMax < 0 || props.inpMin< 0 ? props.error +s.errorValue : props.num} `


    return (
        <div className={s.counter}>
            <div className={finalClassName}>
                {props.inpMax < 0 || props.inpMin< 0 ? props.error +s.errorValue : props.num}

            </div>
            <div className={s.buttonsBlock}>
                <Button name={'inc'}
                        onClick={props.changeNum}
                        disabled={ props.num === props.maxValue || props.num === props.inpMax || props.inpMax=== props.inpMin || props.inpMin< 0 || props.inpMax<0 }
                />
                <Button name={'res'} disabled={ props.inpMax=== props.inpMin || +props.inpMin< 0 || +props.inpMax<0 } onClick={props.resetNum}/>

            </div>
        </div>
    );
};

export default Count;