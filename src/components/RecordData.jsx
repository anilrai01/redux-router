import React from 'react'
import TaskForm from "./TaskForm";
import styled from "styled-components";
import TaskList from "./TaskList";

const ParentPanel = styled.div`
    display: flex;
    flex-direction: row;
`

const LeftPanel = styled.div`
    position: fixed;
    top: 7vh;
    left: 0;
    height: 93vh;
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: red;
    box-shadow: 0 6px 9px rgba(0,0,0,0.2);
`

const RightPanel = styled.div`
    position: relative;
    left: 30%;
    top: 8vh;
    height: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // background: red; 
`

const RecordData = () => {
    return (
        <ParentPanel>
        <LeftPanel>
            <TaskForm />
        </LeftPanel>
        <RightPanel>
            <h2><i>Some of your Pending tasks</i></h2>
            <TaskList/>
            <h3>{new Date().getTime()}</h3>
        </RightPanel>
        </ParentPanel>
     );
}
 
export default RecordData;