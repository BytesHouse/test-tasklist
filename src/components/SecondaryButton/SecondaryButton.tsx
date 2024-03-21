import React from 'react';

const SecondaryButton = ({text}: {text: string}) => {
    return (
        <button className='capitalize bg-red-500 py-[5px] px-[20px]' type='button'>
            {text}
        </button>
    );
};

export default SecondaryButton;