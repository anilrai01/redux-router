import React from "react";
import TaskForm from "./TaskForm";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8vh auto;
  width: 70%;
`;

const mapStateToProps = (state) => {
  return {
    taskData: state.taskData,
  };
};

const EditData = (props) => {
  const data = props.taskData.filter(
    (el) => el.taskID === Number(props.match.params.id)
  );
  console.log(data);

  const redirectToView = () => {
    // alert("Heyyyyy");
    props.history.push("/edit");
  };

  return (
    <Container>
      {/* <h1 style={EditPost}>{props.match.params.id}</h1> */}
      <TaskForm
        mode="Edit"
        redirect={redirectToView}
        taskID={data[0].taskID}
        taskName={data[0].taskName}
        taskDesc={data[0].taskDesc}
        taskStat={data[0].taskStat}
      />
    </Container>
  );
};

export default connect(mapStateToProps, null)(EditData);
