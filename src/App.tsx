import React, { useState} from 'react';


import s from './App.module.css';

import SetCount from './Components/SetCount';
import Counter from './Components/Counter'


const App = () => {

    const startValue = 0

    const [num, setNum] = useState<number>(startValue)

    const [inpMin, setInpMin] = useState<number>(0)

    const [inpMax, setInpMax] = useState<number>(5)

    const [error, setError] = useState('Enter')

    let [enterValue, setEnterValue] = useState(false);

    const changeNum = () => {
        num < inpMax && setNum(num + 1)
    }

    const resetNum = () => {
        setNum(inpMin)
    }
    return (
        <div className={s.App}>

            <Counter setEnterValue={setEnterValue} enterValue={enterValue} inpMax={inpMax} num={num}
                     changeNum={changeNum} resetNum={resetNum} maxValue={inpMax} inpMin={inpMin} setError={setError}
                     error={error}/>

            <SetCount enterValue={enterValue} setEnterValue={setEnterValue} error={error} setError={setError} num={num}
                      setNum={setNum} inpMax={inpMax} setInpMax={setInpMax} inpMin={inpMin}
                      setInpMin={setInpMin} startValue={startValue}/>
        </div>
    );
}

export default App;