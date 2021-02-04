import React from 'react'                                              
import './Input.css'

export interface InputProps{
    size?:'small'|'medium'|'large';
    backgroundColor?:string;
    placeholder?:string;
    title?:string;
}
export const Input:React.FC<InputProps>=({
    size='medium',
    backgroundColor,
    placeholder,
    title,
    ...rest
})=>{
    return(
        <input className={`input ${size}`}{...rest} value={title} placeholder={placeholder} style={{backgroundColor}}/>
    )
}
export default Input
