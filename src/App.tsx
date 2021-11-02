import React, {useEffect, useState} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import NumBtn from "./components/NumBtn";
import OperationBtn from "./components/OperationBtn";
import {operationEnum} from "./types/types";
import {Input} from 'antd'
import {CloseOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons';

function App() {
    const [firstNum, setFirstNum] = useState<number | undefined>();
    const [selectOperation, setSelectOperation] = useState<operationEnum | null>(null);
    const [secondNum, setSecondNum] = useState<number | undefined>();
    const [displayText, setDisplayText] = useState('');
    const inputEl = React.useRef<Input>(null);

    useEffect(()=>{
        if (inputEl.current){
            inputEl.current.focus()
        }
    },[]);
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
                    // throw new Error('Такой операции не существует');
                    console.log('Такой операции не существует')
                    break;
            }
            setFirstNum(result);
            setSelectOperation(null);
            setSecondNum(undefined);

        } else {
            setSelectOperation(operation);
        }
    }

    function handleKeyPress(event: React.KeyboardEvent): any {

        switch (event.key) {
            case 'Backspace':
                Backspace()
                break;
            case '+':
                clickHandlerOperation(operationEnum.fold)
                break;
            case '-':
                clickHandlerOperation(operationEnum.subtract)
                break;
            case '*':
                clickHandlerOperation(operationEnum.multiply)
                break;
            case '/':
                clickHandlerOperation(operationEnum.division)
                break;
            case 'Enter':
                clickHandlerOperation(operationEnum.equals)
                break;
            case '=':
                clickHandlerOperation(operationEnum.equals)
                break;
            default:
                debugger;
                break;
        }

        const regExpNum = new RegExp(/\d{1}/);
        if (regExpNum.test(event.key)) {
            clickHandlerNum(Number(event.key));
        }
    }

    function Backspace() {
        if (secondNum !== undefined) {
            let arr = secondNum.toString().split('');
            arr.pop();
            setSecondNum(Number(arr.join('')));
        } else if (selectOperation !== null) {
            setSelectOperation(null);
        } else if (firstNum !== undefined) {
            let arr = firstNum.toString().split('');
            arr.pop();
            setFirstNum(Number(arr.join('')));
        }
    }

    useEffect(() => {
        setDisplayText(`${firstNum ?? ''}${selectOperation ?? ''}${secondNum ?? ''}`);
    }, [firstNum, selectOperation, secondNum])

    return (
        <div className="App">
            <div className={"result_input"}>
                <Input ref={inputEl} onKeyUp={handleKeyPress} value={displayText} type={"text"}/>
            </div>

            <div className={"row"}>
                <NumBtn num={7} onClick={() => clickHandlerNum(7)}/>
                <NumBtn num={8} onClick={() => clickHandlerNum(8)}/>
                <NumBtn num={9} onClick={() => clickHandlerNum(9)}/>
                <OperationBtn operation={operationEnum.multiply}
                              onClick={() => clickHandlerOperation(operationEnum.multiply)}>
                    <CloseOutlined/>
                </OperationBtn>
            </div>
            <div className={"row"}>
                <NumBtn num={4} onClick={() => clickHandlerNum(4)}/>
                <NumBtn num={5} onClick={() => clickHandlerNum(5)}/>
                <NumBtn num={6} onClick={() => clickHandlerNum(6)}/>
                <OperationBtn operation={operationEnum.subtract}
                              onClick={() => clickHandlerOperation(operationEnum.subtract)}>
                    <MinusOutlined/>
                </OperationBtn>
            </div>
            <div className={"row"}>
                <NumBtn num={1} onClick={() => clickHandlerNum(1)}/>
                <NumBtn num={2} onClick={() => clickHandlerNum(2)}/>
                <NumBtn num={3} onClick={() => clickHandlerNum(3)}/>
                <OperationBtn operation={operationEnum.fold} onClick={() => clickHandlerOperation(operationEnum.fold)}>
                    <PlusOutlined/>
                </OperationBtn>

            </div>
            <div className={"row"}>
                <OperationBtn operation={operationEnum.clear}
                              onClick={() => clickHandlerOperation(operationEnum.clear)}>
                    <span>C</span>
                </OperationBtn>
                <NumBtn num={0} onClick={() => clickHandlerNum(0)}/>
                <OperationBtn operation={operationEnum.division}
                              onClick={() => clickHandlerOperation(operationEnum.division)}>
                    <span>/</span>
                </OperationBtn>
                <OperationBtn operation={operationEnum.equals}
                              onClick={() => clickHandlerOperation(operationEnum.equals)}>
                    <span>=</span>
                </OperationBtn>

            </div>

        </div>
    );
}

export default App;
