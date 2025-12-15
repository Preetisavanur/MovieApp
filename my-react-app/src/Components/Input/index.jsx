import React from "react";
import './index.css';

export function Input({type,placeholder,className,onChange}){
    return(
        <input 
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input ${className || ""}`}
        />
    );
}