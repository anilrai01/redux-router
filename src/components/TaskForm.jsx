import React from 'react'
import styled from "styled-components"
import ButtonUI from "./FormComponent/Button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 80%;
    height: auto;
`

const Input = styled.input`
    outline: none;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;

`

const TextArea = styled.textarea`
    outline: none;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;
    resize: vertical;
`


const SelectStat = styled.select`
    outline: none;
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 1rem;
    box-sizing: border-box;
    width: 100%;
    margin: 1rem 0;
    background: #fff;
`

const TaskForm = () => {
    return ( 
        <Form>
            <label for="taskName">Task Name:</label>
            <Input type="text" id="taskName" placeholder="Task Name"/>

            <label for="taskDesc">Task Description:</label>
            <TextArea rows={20} id="taskDesc"/>

            <label for="taskStat">Status</label>
            <SelectStat id="taskStat">
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
            </SelectStat>

            <ButtonUI text="Save" color="#1e90ff"/>
        </Form>
     );
}
 
export default TaskForm;