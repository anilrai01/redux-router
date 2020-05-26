import React from "react";
import TaskList from "./TaskList";
import styled from "styled-components";

const EditContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7vh auto;
`;

const TaskDataContent = () => {
  return (
    <EditContent>
      <h1>Edit Task Data</h1>
      <TaskList />
    </EditContent>
  );
};

export default TaskDataContent;
