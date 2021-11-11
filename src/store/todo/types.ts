import {
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  REMOVE_TODO,
} from "./actionTypes";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoErrorState{
  error: string | null;  
}
export interface TodoSuccessState{
  pending: boolean;
}
export interface TodosState{
  todos: ITodo[];
}
export interface TodoState{
  todo: ITodo | null;
}

export interface FetchTodoSuccessPayload {
  todos: ITodo[];
}

export interface RemoveTodoPayload {
  todo: ITodo;
}

export interface FetchTodoFailurePayload {
  error: string;
}

export interface FetchTodoRequest {
  type: typeof FETCH_TODO_REQUEST;
}

export interface RemoveTodo {
  type: typeof REMOVE_TODO;
  payload: RemoveTodoPayload;
}

export type FetchTodoSuccess = {
  type: typeof FETCH_TODO_SUCCESS;
  payload: FetchTodoSuccessPayload;
};

export type FetchTodoFailure = {
  type: typeof FETCH_TODO_FAILURE;
  payload: FetchTodoFailurePayload;
};

export type TodoActions =
  | FetchTodoRequest
  | FetchTodoSuccess
  | FetchTodoFailure
  | RemoveTodo;