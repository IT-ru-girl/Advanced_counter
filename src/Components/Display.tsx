import React from 'react';
import s from '../App.module.css';



type DisplayPropsType = {
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


const Display = (props: DisplayPropsType) => {


    const finalClassName = `${s.counterDisplay} + ${props.num === props.inpMax ? s.maxValue : s.num}  `

    if (props.inpMin < 0 || props.inpMax < 0 || props.inpMax < props.inpMin || props.inpMax === props.inpMin) {
        return <div className={s.counter + ' ' + s.errorMessage}>Incorrect value! </div>
    } else if (props.enterValue) {
        return <div className={s.counter + ' ' + s.message}>Enter value </div>
    } else {
        return (
            <div className={s.counter + ' ' + finalClassName}>
                {props.num}
            </div>
        )
    }


};

export default Display;