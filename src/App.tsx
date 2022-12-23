import React, {ChangeEvent, useEffect, useState} from 'react';


import s from './App.module.css';
import Count from './Components/Count';
import SetCount from './Components/SetCount';


const App = () => {

    const startValue = 0

    const [num, setNum] = useState<number>(startValue)


    const [inpMin, setInpMin] = useState<number>(0)

    const [inpMax, setInpMax] = useState<number>(0)

    const [error, setError]=useState('Incorrect value!')

    const changeNum = () => {
        num < inpMax && setNum(num + 1)
    }

    const resetNum = () => {
        setNum(inpMin)
    }

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMin')
        if (valueAsString) {
            let getValueMin = JSON.parse(valueAsString)
            setInpMin(+getValueMin)
        }
    }, [])

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValueMax')
        if (valueAsString) {
            let getValueMax = JSON.parse(valueAsString)
            setInpMax(+getValueMax)
        }

    }, [])

    return (
        <div className={s.App}>
            <Count error={error} setError={setError} inpMin={inpMin} inpMax={inpMax} num={num} changeNum={changeNum} resetNum={resetNum}
                   maxValue={inpMax}/>

            <SetCount num={num} setNum={setNum} inpMax={inpMax} setInpMax={setInpMax} inpMin={inpMin}
                      setInpMin={setInpMin} startValue={startValue}/>
        </div>
    );
}

export default App;