export const GET_TASKS_SUCCESS = "GET_TASKS_SUCCESS";
export const GET_TASKS_REQUEST = "GET_TASKS_REQUEST";
export const GET_TASKS_FAILURE = "GET_TASKS_FAILURE";
export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const TOGGLE_CHECK_TASK = "TOGGLE_CHECK_TASK";

const getTasksRequest = () => ({
  type: GET_TASKS_REQUEST
});

const getTasksSuccess = data => ({
  type: GET_TASKS_SUCCESS,
  payload: data
});

const getTasksFailure = error => ({
  type: GET_TASKS_FAILURE,
  payload: error
});

export const addTaskAction = data => ({
  type: ADD_TASK,
  payload: data
});

export const editTaskAction = data => ({
  type: EDIT_TASK,
  payload: data
});

export const deleteTaskAction = taskId => ({
  type: DELETE_TASK,
  payload: taskId
});

export const toggleCheckStatusAction = taskId => ({
  type: TOGGLE_CHECK_TASK,
  payload: taskId
});

export const fetchTasks = () => dispatch => {
  dispatch(getTasksRequest());
  fetch("https://jsonplaceholder.typicode.com/todos?_limit=30")
    .then(data => data.json())
    .then(tasks => dispatch(getTasksSuccess(tasks)))
    .catch(err => dispatch(getTasksFailure(err)));
};
