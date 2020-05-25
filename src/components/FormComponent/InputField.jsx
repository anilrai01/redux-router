import React from 'react'
import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border: 1px solid #ddd;
    // border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;

`

const InputField = (props) => {

    return ( 
        <Input 
            value={props.value}
            name={props.name}
            onChange={props.handleChange}
            placeholder={props.placeholder} 
            type={props.type} 
            id={props.id}
        />
     );
}
 
export default InputField;
