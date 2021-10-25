import React, {useEffect, useState} from 'react';
import './App.css';
import NumBtn from "./components/NumBtn";
import OperationBtn from "./components/OperationBtn";
import {operationEnum} from "./types/types";

function App() {
    const [firstNum, setFirstNum] = useState<number | undefined>();
    const [selectOperation, setSelectOperation] = useState<operationEnum | null>(null);
    const [secondNum, setSecondNum] = useState<number | undefined>();
    const [displayText, setDisplayText] = useState('');

    const clickHandlerNum = (num: number) => {
        if (!selectOperation) {
            if (firstNum === undefined) {
                setFirstNum(num)
            } else {
                let temp: string = firstNum!.toString() + num.toString();
                setFirstNum(Number(temp))
            }
        } else {
            if (secondNum === undefined) {
                setSecondNum(num);
            } else {
                let temp: string = secondNum!.toString() + num.toString();
                setSecondNum(Number(temp));
            }

        }
    }
    const clickHandlerOperation = (operation: operationEnum) => {
        if (operation === operationEnum.clear) {
            setFirstNum(undefined);
            setSelectOperation(null);
            setSecondNum(undefined);
        } else if (operation as operationEnum === operationEnum.equals) {
            let result: number = 0;
            switch (selectOperation) {
                case operationEnum.fold:
                    result = firstNum! + secondNum!;
                    break;
                case operationEnum.subtract:
                    result = firstNum! - secondNum!;
                    break;
                case operationEnum.multiply:
                    result = firstNum! * secondNum!;
                    break;
                case operationEnum.division:
                    result = firstNum! / secondNum!;
                    break;
                default:
                    throw new Error('Такой операции не существует');
                    break;
            }
            setFirstNum(result);
            setSelectOperation(null);
            setSecondNum(undefined);

        } else {
            setSelectOperation(operation);
        }
    }
    useEffect(() => {
        setDisplayText(`${firstNum ?? ''}${selectOperation ?? ''}${secondNum ?? ''}`);
    }, [firstNum, selectOperation, secondNum])

    return (
        <div className="App">
            <input readOnly value={displayText} type={"text"}/>

            <div className={"row"}>
                <NumBtn num={7} onClick={() => clickHandlerNum(7)}/>
                <NumBtn num={8} onClick={() => clickHandlerNum(8)}/>
                <NumBtn num={9} onClick={() => clickHandlerNum(9)}/>
                <OperationBtn operation={operationEnum.multiply}
                              onClick={() => clickHandlerOperation(operationEnum.multiply)}/>
            </div>
            <div className={"row"}>
                <NumBtn num={4} onClick={() => clickHandlerNum(4)}/>
                <NumBtn num={5} onClick={() => clickHandlerNum(5)}/>
                <NumBtn num={6} onClick={() => clickHandlerNum(6)}/>
                <OperationBtn operation={operationEnum.subtract}
                              onClick={() => clickHandlerOperation(operationEnum.subtract)}/>
            </div>
            <div className={"row"}>
                <NumBtn num={1} onClick={() => clickHandlerNum(1)}/>
                <NumBtn num={2} onClick={() => clickHandlerNum(2)}/>
                <NumBtn num={3} onClick={() => clickHandlerNum(3)}/>
                <OperationBtn operation={operationEnum.fold} onClick={() => clickHandlerOperation(operationEnum.fold)}/>

            </div>
            <div className={"row"}>
                <OperationBtn operation={operationEnum.clear}
                              onClick={() => clickHandlerOperation(operationEnum.clear)}/>
                <NumBtn num={0} onClick={() => clickHandlerNum(0)}/>
                <OperationBtn operation={operationEnum.division}
                              onClick={() => clickHandlerOperation(operationEnum.division)}/>
                <OperationBtn operation={operationEnum.equals}
                              onClick={() => clickHandlerOperation(operationEnum.equals)}/>

            </div>

        </div>
    );
}

export default App;
