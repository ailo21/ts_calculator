import React, {FC} from 'react';
import {operationEnum} from "../types/types";
import { Button} from 'antd';

interface OperationBtnProps{
    operation:operationEnum,
    onClick:(operation:operationEnum)=>void
}



const OperationBtn:FC<OperationBtnProps> = ({operation,onClick}) => {
    return (
        <Button   type="primary" shape="circle"  onClick={()=>onClick(operation)}>
            {operation}
        </Button>
    );
};

export default OperationBtn;
