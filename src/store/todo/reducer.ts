import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  REMOVE_TODO,
} from "./actionTypes";

import { TodoActions, TodoErrorState, TodosState, TodoState, TodoSuccessState } from "./types";

export type SuccessTodos = TodosState & TodoSuccessState & TodoErrorState;

export type FailureTodos = TodosState & TodoSuccessState & TodoErrorState;

export type MergeStates = (TodoState | TodosState) & (SuccessTodos & FailureTodos);

const intialState: MergeStates = {
  error: null,
  pending: false,
  todo: null,
  todos: []
};

export const todoReducer = 
(state = intialState, action: TodoActions) : 
SuccessTodos | FailureTodos | MergeStates => {
  switch (action.type) {
    case FETCH_TODO_REQUEST:
        const data = state as TodosState;
        const fetched: SuccessTodos = {          
          pending: true,
          todos: data.todos,
          error: null
        };
        return fetched;
    case FETCH_TODO_SUCCESS:
      const success : SuccessTodos = {
        pending: false,
        todos: action.payload.todos,
        error: null,
      }
      return success;
    case REMOVE_TODO:
      const dataState = state as TodosState;
      const remove = dataState.todos.filter(x => x.id !== action.payload.todo.id);
      const modified: MergeStates = {
        todos: remove,
        error: null,
        pending: false,
        todo: action.payload.todo,
      }
      return modified;
    case FETCH_TODO_FAILURE:
      const error = action.payload.error;
      const failure : FailureTodos = {
        pending: false,
        todos: [],
        error: error
      };
      return failure;
    default:
      const defaultTodos: MergeStates = {
          error: null,
          pending: false,
          todo: null,
          todos: []
      }
      return defaultTodos;
  }
};

export default todoReducer;
