import React, {FC} from 'react';
import {operation} from "../types/types";

interface OperationBtnProps{
    operation:operation,
    onClick:(operation:operation)=>void
}



const OperationBtn:FC<OperationBtnProps> = ({operation,onClick}) => {
    return (
        <button onClick={()=>onClick(operation)}>
            {operation}
        </button>
    );
};

export default OperationBtn;
