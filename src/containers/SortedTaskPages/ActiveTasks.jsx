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

class ActiveTasks extends Component {
  componentDidMount() {
    const {
      tasks: { data: taskList },
      fetchTasks
    } = this.props;
    if (taskList.length === 0) fetchTasks();
  }
  render() {
    const {
      tasks: { isLoading },
      activeTasks,
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
            taskList={activeTasks}
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
  tasks: state.tasks,
  activeTasks: state.tasks.data.filter(task => !task.completed)
});

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(fetchTasks()),
    editTaskAction: ({ title, id }) => dispatch(editTaskAction({ title, id })),
    deleteTaskAction: id => dispatch(deleteTaskAction(id)),
    toggleCheckStatusAction: id => dispatch(toggleCheckStatusAction(id))
  };
};

ActiveTasks.propTypes = {
  tasks: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTasks);
