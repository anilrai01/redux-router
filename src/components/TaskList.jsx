import React from "react";
import styled, { css } from "styled-components";
import ButtonUI from "./FormComponent/Button";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { DelTask } from "../redux/taskActionCreator";

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
  ${(props) =>
    props.type === "Record"
      ? css`
          padding: 20px;
        `
      : css`
          padding: 5px 15px;
        `}
`;

const EmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 5rem;
`;

const LinkDecor = {
  textDecoration: "none",
};

const mapStateToProps = (state) => {
  return {
    taskData: state.taskData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    delData: (data) => {
      dispatch(DelTask(data));
    },
  };
};

const TaskList = (props) => {
  const handleDel = (data) => {
    // alert("Deleted " + data);
    props.delData(data);
  };

  if (props.taskData.length == 0) {
    return (
      <EmptyMessage>
        <h1>
          <i>There are no due data in your list</i>
        </h1>
        <h2>Start Adding them from Record Data Page</h2>
      </EmptyMessage>
    );
  }

  if (props.mode === "Record") {
    return (
      <React.Fragment>
        <h2>
          <i>Some of your pending tasks</i>
        </h2>
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
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>
          <i>Edit your Data here</i>
        </h1>
        <TaskTable>
          <TableRow>
            <TableHeading>Task Name</TableHeading>
            <TableHeading>Task Description</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading></TableHeading>
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
              <TableData>
                <ButtonUI
                  text="Delete"
                  handleClick={() => handleDel(el.taskID)}
                />
              </TableData>
            </TableRow>
          ))}
        </TaskTable>
      </React.Fragment>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
