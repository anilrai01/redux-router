import React from "react";
import { useForm } from "../hooks/useForm";
import styled from "styled-components";
import ButtonUI from "./FormComponent/Button";
import InputField from "./FormComponent/InputField";
import TextAreaField from "./FormComponent/TextAreaField";
import SelectField from "./FormComponent/SelectField";
import { AddTask, EditTask } from "../redux/taskActionCreator";
import { connect } from "react-redux";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80%;
  height: auto;
`;

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (data) => {
      dispatch(AddTask(data));
    },
    editTask: (data) => {
      dispatch(EditTask(data));
    },
  };
};

const TaskForm = (props) => {
  const [values, handleChange] = useForm({
    taskID: props.taskID !== undefined ? props.taskID : new Date().getTime(),
    taskName: props.taskName !== undefined ? props.taskName : "",
    taskDesc: props.taskDesc !== undefined ? props.taskDesc : "",
    taskStat: props.taskStat !== undefined ? props.taskStat : "Incomplete",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.taskName !== null && values.taskName !== "") {
      if (props.mode === "Edit") {
        props.editTask(values);
        props.redirect();
        console.log("Edited");
      } else {
        props.addTask(values);
        console.log("Added");
      }
    }
  };

  const BtnText = props.mode === "Edit" ? "Edit" : "Save";

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name</label>
      <InputField
        name="taskName"
        type="text"
        id="taskName"
        placeholder="Task Name"
        value={values.taskName}
        handleChange={handleChange}
      />

      <label htmlFor="taskDesc">Task Description</label>
      <TextAreaField
        name="taskDesc"
        rows={20}
        id="taskDesc"
        value={values.taskDesc}
        handleChange={handleChange}
      />

      <label htmlFor="taskStat">Status</label>
      <SelectField
        name="taskStat"
        id="taskStat"
        options={["Incomplete", "Complete"]}
        value={values.taskStat}
        handleChange={handleChange}
      />

      <ButtonUI text={BtnText} />
    </Form>
  );
};

export default connect(null, mapDispatchToProps)(TaskForm);
