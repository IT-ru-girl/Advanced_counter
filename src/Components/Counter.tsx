import React from 'react';
import Display from './Display';
import s from '../App.module.css';
import Button from './Button';


type CounterPropsType = {
    changeNum: () => void
    resetNum: () => void
    num: number
    maxValue: number
    inpMax: number
    inpMin: number
    setError: (error: string) => void
    error: string
    setEnterValue: (enterValue: boolean) => void
    enterValue: boolean
}

const Counter = (props: CounterPropsType) => {


    return (
        <div className={s.counter}>
            <Display error={props.error}
                     setError={props.setError}
                     inpMin={props.inpMin}
                     inpMax={props.inpMax}
                     num={props.num}
                     changeNum={props.changeNum}
                     resetNum={props.resetNum}
                     maxValue={props.inpMax}
                     setEnterValue={props.setEnterValue}
                     enterValue={props.enterValue}/>


            <div className={s.buttonsBlock}>
                <Button name={'inc'}
                        onClick={props.changeNum}
                        disabled={props.num === props.maxValue || props.num === props.inpMax || props.inpMax === props.inpMin || props.inpMin < 0 || props.inpMax < 0 || props.inpMax < props.inpMin}
                />
                <Button name={'res'}
                        disabled={props.inpMax === props.inpMin || props.inpMin < 0 || props.inpMax < 0 || props.inpMax < props.inpMin}
                        onClick={props.resetNum}/>

            </div>
        </div>
    );
};

export default Counter;