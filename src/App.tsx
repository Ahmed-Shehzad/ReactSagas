import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoRequest, removeTodo } from './store/todo/actions';
import { getPendingSelector, getTodosSelector, getErrorSelector } from './store/todo/selectors';
import { ITodo } from './store/todo/types';

const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const todos = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  const onDeleteHandler = (todo: ITodo) => {
    dispatch(removeTodo({todo}));
  }

  return (
    <div style={{ padding: "15px" }}>
      { pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        todos.map((todo, index) => (
          <div style={{ marginBottom: "10px" }} key={todo.id}>
            <button onClick={() => onDeleteHandler(todo)}>
              {++index}
            </button>
            {todo.title}
          </div>
        ))
      )}
    </div>
  );
};

export default App;

