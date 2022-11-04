import React, {useState} from 'react';



import s from './App.module.css';
import Count from './Components/Count';



const App = () => {

    const startValue =0
    const maxValue =5
    const [num, setNum] = useState<number>(startValue)

    const changeNum = () => {
      num<maxValue && setNum(num + 1)
    }

    const resetNum = () => {
        setNum(0)
    }
    return (
        <div className={s.app}>
            <Count num={num} changeNum={changeNum} resetNum={resetNum} maxValue={maxValue}/>
        </div>
    );
}

export default App;