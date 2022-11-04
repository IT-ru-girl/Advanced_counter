import React, {useState} from 'react';



import s from './App.module.css';
import Count from './Components/Count';



const App = () => {
    const [num, setNum] = useState<number>(0)

    const changeNum = () => {
       setNum(num + 1)
    }

    const resetNum = () => {
        setNum(0)
    }
    return (
        <div className={s.app}>
            <Count num={num} changeNum={changeNum} resetNum={resetNum}/>
        </div>
    );
}

export default App;