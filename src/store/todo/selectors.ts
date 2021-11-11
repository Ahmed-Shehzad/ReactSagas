import { AppState } from './../rootReducer';
import { createSelector } from "reselect";

import { MergeStates } from "./reducer";

const getPending = (state: AppState) => {
    const todo = state.todo as MergeStates;
    return todo.pending;
};

const getTodos = (state: AppState) => {
    const todo = state.todo as MergeStates;
    return todo.todos;
};

const getError = (state: AppState) => {
    const todo = state.todo as MergeStates;
    return todo.error;
};

export const getTodosSelector = createSelector(getTodos, (todos) => todos);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);