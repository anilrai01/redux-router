import React from 'react'
import styled from "styled-components";
import ButtonUI from "./FormComponent/Button"

const TaskTable = styled.table`
    width: 70%;
    outline: none;
    margin-top: 2rem;
    background: #eee;
    border-collapse: collapse;
    border-spacing: 0;
`
const TableRow = styled.tr`
    text-align: left;
    // border-bottom: 1px solid #ddd;
    &:nth-child(odd){
        background: #fff;
    }
`
const TableHeading = styled.th`
    background: #ba68c8;
    color: #fff;
    padding: 10px 15px;
    text-transform: uppercase;
`

const TableData = styled.td`
    padding: 12px 15px;
`

const TaskList = () => {
    return ( 

        <TaskTable>
            <TableRow>
                <TableHeading>Task Name:</TableHeading>
                <TableHeading>Task Description</TableHeading>
                <TableHeading>Status</TableHeading>
                <TableHeading></TableHeading>
            </TableRow>
            <TableRow>
                <TableData>First Task</TableData>
                <TableData>Complete this project as soon as possible</TableData>
                <TableData>Incomplete</TableData>
                <ButtonUI text="Edit" color="#2e9e4e"/>
            </TableRow>
            <TableRow>
                <TableData>Second Task</TableData>
                <TableData>This is test task</TableData>
                <TableData>Incomplete</TableData>
                <ButtonUI text="Edit" color="#2e9e4e"/>
            </TableRow>
            <TableRow>
                <TableData>Third Task</TableData>
                <TableData>This is success test task</TableData>
                <TableData>Complete</TableData>
                <ButtonUI text="Edit" color="#2e9e4e"/>
            </TableRow>
        </TaskTable>

     );
}
 
export default TaskList;