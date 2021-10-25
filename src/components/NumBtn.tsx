import React, {FC} from 'react';
import { Button} from 'antd';

interface NumBtnProps {
    num: number,
    onClick: (num:number) => void
}

const NumBtn: FC<NumBtnProps> = ({num,onClick}) => {
    return (
        <Button  type="ghost" shape="circle" onClick={()=>onClick(num)}>
            {num}
        </Button>
    );
};

export default NumBtn;
