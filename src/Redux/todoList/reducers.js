import {
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASKS_FAILURE,
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  TOGGLE_CHECK_TASK
} from "./actions";

const initialState = {
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return {
        ...initialState,
        isLoading: true
      };
    case GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: [...action.payload]
      };
    case GET_TASKS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoaded: false,
        error: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    case EDIT_TASK: {
      const arr = state.data.map(task =>
        task.id !== action.payload.id
          ? task
          : { ...task, title: action.payload.title }
      );
      return {
        ...state,
        data: arr
      };
    }
    case DELETE_TASK: {
      const arr = state.data.filter(task => task.id !== action.payload);

      return {
        ...state,
        data: arr
      };
    }
    case TOGGLE_CHECK_TASK:
      const arr = state.data.map(task =>
        task.id !== action.payload
          ? task
          : { ...task, completed: !task.completed }
      );
      return {
        ...state,
        data: arr
      };

    default:
      return state;
  }
};
