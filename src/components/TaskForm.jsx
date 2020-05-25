import React from 'react'
import {useForm} from "../hooks/useForm";
import styled from "styled-components"
import ButtonUI from "./FormComponent/Button";
import InputField from "./FormComponent/InputField";
import TextAreaField from "./FormComponent/TextAreaField";
import SelectField from "./FormComponent/SelectField";
import {AddTask} from "../redux/taskActionCreator"
import {connect} from "react-redux";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 80%;
    height: auto;
`

const mapDispatchToProps = dispatch => {
    return {
        addTask: data => {
            dispatch(AddTask(data))
        }
    }
}

const TaskForm = (props) => {
    const [ values , handleChange] = useForm({taskName: '', taskDesc: '', taskStat: 'Complete' });

    const handleSubmit = e => {
        e.preventDefault();
        if(values.taskName !== null && values.taskName !== ""){
            props.addTask(values);
        }
    }
    
    return ( 
        <Form onSubmit={handleSubmit}>
            <label htmlFor="taskName">Task Name</label>
            <InputField 
                name="taskName" 
                type="text" 
                id="taskName" 
                placeholder="Task Name" 
                value={values.taskName}
                handleChange = {handleChange}
            />

            <label htmlFor="taskDesc">Task Description</label>
            <TextAreaField 
                name="taskDesc" 
                rows={20} id="taskDesc" 
                value={values.taskDesc}
                handleChange = {handleChange}
            />

            <label htmlFor="taskStat">Status</label>
            <SelectField 
                name="taskStat" 
                id="taskStat" 
                options={["Incomplete", "Complete"]} 
                value={values.taskStat}
                handleChange = {handleChange}
            />

            <ButtonUI text="Save" color="#1e90ff"/>
        </Form>
     );
}
 
export default connect(null, mapDispatchToProps)(TaskForm);