import React from 'react'
import styled from "styled-components";


const TextArea = styled.textarea`
    outline: none;
    border: 1px solid #ddd;
    // border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;
    resize: vertical;
`

const TextAreaField = (props) => {
    return ( 
        <TextArea 
            value={props.value}
            name={props.name}
            onChange={props.handleChange} 
            placeholder={props.placeholder} 
            rows={props.rows}
            id={props.id}
        />
     );
}
 
export default TextAreaField;
