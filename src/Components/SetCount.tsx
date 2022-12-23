import React, {ChangeEvent, useEffect, useState} from 'react';
import Button from './Button';
import s from '../App.module.css';
import b from '../Button.module.css'
import {Simulate} from 'react-dom/test-utils';


type SetCountType = {
    setInpMin: (actualValue: number) => void
    inpMin: number
    setInpMax: (actualValueMax: number) => void
    inpMax: number
    setNum: (inpMin: number) => void
    num: number
    startValue: number


}
const SetCount = (props: SetCountType) => {
    const [min, setMin] = useState(props.inpMin)
    const [max, setMax] = useState(props.inpMax)
    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValueMax = +event.currentTarget.value
        setMax(actualValueMax)
    }

    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = +event.currentTarget.value
        setMin(actualValue)
        // props.setNum(props.inpMin < 0 || +props.inpMax < 0 ? 'Incorrect value!' : s.num)
    }

    useEffect(()=>{
        setMin(props.inpMin)
        setMax(props.inpMax)
    },[props.inpMax, props.inpMin])

    const onClickHandler = () => {
        localStorage.setItem('counterValueMin', JSON.stringify(min))
        localStorage.setItem('counterValueMax', JSON.stringify(max))
        props.setInpMax(max)
        props.setInpMin(min)
        props.setNum(min)
    }

    const onFocusHandler = () => {

    }
    const finalErrorInput = `${s.counterDisplay} ${props.inpMin <= 0 || props.inpMax === props.inpMin ? s.errorInput : s.input}`
    const finalErrorInput2 = `${s.counterDisplay} ${props.inpMax <= 0 || props.inpMax === props.inpMin ? s.errorInput : s.input}`

    return (
        <div className={s.counter}>
            <span>{'min value:'}</span>
            <input className={finalErrorInput} onFocus={onFocusHandler} value={min} onChange={onChangeMin}
                   type="number"/>

            <span>{'max value:'}</span>
            <div>{props.inpMin}</div>
            <input className={finalErrorInput2} value={max} onChange={onChangeMax} type="number"/>
            <div className={b.divButton}>
                <Button disabled={max === min || min < 0 || max < 0} onClick={onClickHandler} name={'set'}/>
            </div>

        </div>
    );
};

export default SetCount;

//если миносовое то инпут красим красным