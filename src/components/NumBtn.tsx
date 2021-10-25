import React, {FC} from 'react';

interface NumBtnProps {
    num: number,
    onClick: (num:number) => void
}

const NumBtn: FC<NumBtnProps> = ({num,onClick}) => {
    return (
        <button onClick={()=>onClick(num)}>
            {num}
        </button>
    );
};

export default NumBtn;
