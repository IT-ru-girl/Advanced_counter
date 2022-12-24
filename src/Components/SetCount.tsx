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
    error:string
    setError: (error:string)=>void


}
const SetCount = (props: SetCountType) => {


    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMin')
        if (valueAsString) {
            let getValueMin = JSON.parse(valueAsString)
           props.setInpMin(+getValueMin)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let getValueMax = JSON.parse(valueAsString)
           props.setInpMax(+getValueMax)
        }

    }, [])

    const onChangeMax = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValueMax = +event.currentTarget.value
       props.setInpMax(actualValueMax)
    }

    const onChangeMin = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = +event.currentTarget.value
       props.setInpMin(actualValue)


    }


    const onClickHandler = () => {
        localStorage.setItem('counterValueMin', JSON.stringify(props.inpMin))
        localStorage.setItem('counterValueMax', JSON.stringify(props.inpMax))
        props.setInpMax(props.inpMax)
        props.setInpMin(props.inpMin)
        props.setNum(props.inpMin)

    }

    const finalErrorInput = `${s.counterDisplay} ${props.inpMin <= 0 || props.inpMax === props.inpMin ||  props.inpMax < props.inpMin ? s.errorInput  : s.input}`
    const finalErrorInput2 = `${s.counterDisplay} ${props.inpMax <= 0 || props.inpMax === props.inpMin  || props.inpMax < props.inpMin ? s.errorInput : s.input}`

    return (
        <div className={s.counter}>
            <span>{'min value:'}</span>
            <input className={finalErrorInput}   value={props.inpMin} onChange={onChangeMin}
                   type="number"/>

            <span>{'max value:'}</span>
            <input className={finalErrorInput2} value={props.inpMax} onChange={onChangeMax} type="number"/>

            <div className={b.divButton}>
                <Button
                    disabled={props.inpMax === props.inpMin || props.inpMax < 0 || props.inpMin < 0 || props.inpMax < props.inpMin }
                    onClick={onClickHandler} name={'set'}/>
            </div>

        </div>
    );
};

export default SetCount;

//если миносовое то инпут красим красным