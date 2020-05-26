import React from "react";
import styled, {css} from "styled-components";
import ButtonUI from "./FormComponent/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TaskTable = styled.table`
  width: 70%;
  outline: none;
  margin-top: 2rem;
  background: #eee;
  border-collapse: collapse;
  border-spacing: 0;
`;
const TableRow = styled.tr`
  text-align: left;
  // border-bottom: 1px solid #ddd;
  &:nth-child(odd) {
    background: #fff;
  }
`;
const TableHeading = styled.th`
  background: #ba68c8;
  color: #fff;
  padding: 10px 15px;
  text-transform: uppercase;
`;

const TableData = styled.td`
  ${props => props.type === "Record" ? css`
    padding: 20px
  ` : 
  css`
    padding: 5px 15px
  `
  }
`;

const LinkDecor = {
  textDecoration: "none",
};

const mapStateToProps = (state) => {
  return {
    taskData: state.taskData,
  };
};

const TaskList = (props) => {
  if(props.mode === "Record") {
    return (
      <TaskTable>
        <TableRow>
          <TableHeading>Task Name</TableHeading>
          <TableHeading>Task Description</TableHeading>
          <TableHeading>Status</TableHeading>
        </TableRow>
        {props.taskData.map((el) => (
          <TableRow key={el.taskID}>
            <TableData type="Record">{el.taskName}</TableData>
            <TableData type="Record">{el.taskDesc}</TableData>
            <TableData type="Record">{el.taskStat}</TableData>
          </TableRow>
        ))}
      </TaskTable>
    );
  }else{
    return (
      <TaskTable>
        <TableRow>
          <TableHeading>Task Name</TableHeading>
          <TableHeading>Task Description</TableHeading>
          <TableHeading>Status</TableHeading>
          <TableHeading></TableHeading>
        </TableRow>
        {props.taskData.map((el) => (
          <TableRow key={el.taskID}>
            <TableData>{el.taskName}</TableData>
            <TableData>{el.taskDesc}</TableData>
            <TableData>{el.taskStat}</TableData>
            <TableData>
            <Link to={`/edit/${el.taskID}`} style={LinkDecor}>
              <ButtonUI text="Edit" />
              {/* Edit */}
            </Link>
            </TableData>
          </TableRow>
        ))}
      </TaskTable>
    );
  }
};

export default connect(mapStateToProps, null)(TaskList);
