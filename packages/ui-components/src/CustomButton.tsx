import React from 'react';

interface Props {
    name: string;
}

const CustomButton= ({ name }: Props) => {
    const handleClick = () => {
        alert("Hello, world!");
    };

    return <button onClick={handleClick}>{name}</button>;
};

export { CustomButton };