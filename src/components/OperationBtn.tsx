import React, {FC} from 'react';
import {operationEnum} from "../types/types";

interface OperationBtnProps{
    operation:operationEnum,
    onClick:(operation:operationEnum)=>void
}



const OperationBtn:FC<OperationBtnProps> = ({operation,onClick}) => {
    return (
        <button onClick={()=>onClick(operation)}>
            {operation}
        </button>
    );
};

export default OperationBtn;
