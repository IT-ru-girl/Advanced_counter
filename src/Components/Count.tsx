import React from 'react';
import s from '../App.module.css';
import Button from './Button';



type CountPropsType ={
    changeNum: ()=> void
    resetNum: ()=> void
    num: number
}

const Count = (props: CountPropsType) => {
    return (
        <div>
            <div className={props.num === 5 ? s.error : s.num}>{props.num}</div>
            <Button name={'inc'} onClick={props.changeNum} />
            <Button name={'res'}  onClick={props.resetNum}/>
        </div>
    );
};

export default Count;