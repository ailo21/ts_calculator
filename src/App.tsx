import React, {useEffect, useState} from 'react';
import './App.css';
import NumBtn from "./components/NumBtn";
import OperationBtn from "./components/OperationBtn";
import {operation} from "./types/types";

function App() {
    const [firstNum, setFirstNum] = useState('');
    const [selectOperation, setSelectOperation] = useState<operation | null>(null);
    const [secondNum, setSecondNum] = useState('');
    const [displayText, setDisplayText] = useState('');

    const clickHandlerNum = (num: number) => {
        if (!selectOperation) {
            setFirstNum(`${firstNum}${num}`)
        }
        else{
            setSecondNum(`${secondNum}${num}`)
        }
    }
    const clickHandlerOperation = (operation: operation) => {
        setSelectOperation(operation);
    }
    useEffect(() => {
        setDisplayText(`${firstNum}${selectOperation ?? ''}${secondNum}`);
    }, [firstNum, selectOperation, secondNum])

    return (
        <div className="App">
            <input readOnly value={displayText} type={"text"}/>

            <div className={"row"}>
                <NumBtn num={7} onClick={() => clickHandlerNum(7)}/>
                <NumBtn num={8} onClick={() => clickHandlerNum(8)}/>
                <NumBtn num={9} onClick={() => clickHandlerNum(9)}/>
                <OperationBtn operation={operation.multiply} onClick={() => clickHandlerOperation(operation.multiply)}/>
            </div>
            <div className={"row"}>
                <NumBtn num={4} onClick={() => clickHandlerNum(4)}/>
                <NumBtn num={5} onClick={() => clickHandlerNum(5)}/>
                <NumBtn num={6} onClick={() => clickHandlerNum(6)}/>
                <OperationBtn operation={operation.subtract} onClick={() => clickHandlerOperation(operation.subtract)}/>
            </div>
            <div className={"row"}>
                <NumBtn num={1} onClick={() => clickHandlerNum(1)}/>
                <NumBtn num={2} onClick={() => clickHandlerNum(2)}/>
                <NumBtn num={3} onClick={() => clickHandlerNum(3)}/>
                <OperationBtn operation={operation.fold} onClick={() => clickHandlerOperation(operation.fold)}/>

            </div>
            <div className={"row"}>
                <OperationBtn operation={operation.equals} onClick={() => clickHandlerOperation(operation.equals)}/>

            </div>

        </div>
    );
}

export default App;
