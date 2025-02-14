import React from 'react';
import './Common.css'


const Button = ({ label, type = 'submit', onClick, variant } : {
    label: string,
    type: 'submit' | 'button' | 'reset',
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    variant: string
} ) => {
    return (
        <button
            type={type}
            className={`btn ${variant}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;