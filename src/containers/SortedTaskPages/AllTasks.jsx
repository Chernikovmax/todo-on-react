import React, { Component } from "react";
import { connect } from "react-redux";
import { Loader } from "../../components/downloadSpinner";
import { TodoList } from "../TodoList";
import {
  fetchTasks,
  editTaskAction,
  deleteTaskAction,
  toggleCheckStatusAction
} from "../../Redux/todoList";
import PropTypes from "prop-types";

class AllTasks extends Component {
  componentDidMount() {
    const {
      tasks: { data: taskList },
      fetchTasks
    } = this.props;
    if (taskList.length === 0) fetchTasks();
  }
  render() {
    const {
      tasks: { data: taskList, isLoading },
      editTaskAction,
      deleteTaskAction,
      toggleCheckStatusAction
    } = this.props;
    return (
      <div className="page-container">
        {isLoading ? (
          <Loader />
        ) : (
          <TodoList
            taskList={taskList}
            onEdit={editTaskAction}
            onDelete={deleteTaskAction}
            onCheck={toggleCheckStatusAction}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    editTaskAction: ({ title, id }) => dispatch(editTaskAction({ title, id })),
    deleteTaskAction: id => dispatch(deleteTaskAction(id)),
    toggleCheckStatusAction: id => dispatch(toggleCheckStatusAction(id))
  };
};

AllTasks.propTypes = {
  tasks: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllTasks);
