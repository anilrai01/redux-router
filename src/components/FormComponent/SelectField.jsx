import React from 'react';
// import {useForm} from "../../hooks/useForm";
import styled from "styled-components";

const SelectStat = styled.select`
    outline: none;
    border: 1px solid #ddd;
    // border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;
    background: #fff;
`
const SelectField = props => {

    return (
        <SelectStat 
        name={props.name} 
        id={props.id} 
        value={props.value}
        onChange={props.handleChange}>
            {props.options.map((el, index) =>
                <option key={index} value={el}>{el}</option>
            )}
        </SelectStat>
    )
}

export default SelectField;