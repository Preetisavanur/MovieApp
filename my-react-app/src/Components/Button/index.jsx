import {Children} from 'react';
import './index.css';

export function Button ({children, onClick, className, style, type}){
    return (
        <button onClick={onClick}   
        type={type}
         className={className} >
            {children}
        </button>
    );
}

