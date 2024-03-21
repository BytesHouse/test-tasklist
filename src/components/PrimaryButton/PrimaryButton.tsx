import React from 'react';

const PrimaryButton = ({text}: {text: string}) => {
    return (
        <button className='capitalize bg-green-500 py-[5px] px-[20px]' type='button'>
            {text}
        </button>
    );
};

export default PrimaryButton;