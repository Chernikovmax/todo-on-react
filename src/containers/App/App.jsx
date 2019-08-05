import React from "react";
import { connect } from "react-redux";
import { TodoItem } from "../TodoItem";
import { Header } from "../Header";

import { Loader } from "../../components/downloadSpinner";
import {
  fetchTasks,
  editTaskAction,
  deleteTaskAction,
  toggleCheckStatusAction
} from "../../Redux/todoList";
import PropTypes from "prop-types";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const { fetchTasks } = this.props;
    fetchTasks();
  }

  render() {
    const {
      tasks: { data: taskList, isLoading },
      editTaskAction,
      deleteTaskAction,
      toggleCheckStatusAction
    } = this.props;
    console.log();

    return (
      <div className="app">
        <Header />
        <ul className="tasks-list">
          {isLoading ? (
            <Loader />
          ) : (
            taskList.map(task => (
              <TodoItem
                key={task.id}
                id={task.id}
                title={task.title}
                isCompleted={task.completed}
                onEdit={editTaskAction}
                onDelete={deleteTaskAction}
                onCheck={toggleCheckStatusAction}
              />
            ))
          )}
        </ul>
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

App.propTypes = {
  tasks: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
