import React, { useState, useReducer, useEffect } from 'react';
import TodoPage from 'Components/TodoPage';
import TodoForm from 'Components/TodoForm';
import TodoListing from 'Components/TodoListing';
import TodoListHeader from 'Components/TodoListHeader';
import generateID from 'Util/generateID';

const Index = () => {
  const initialState = {
    todos: [],
  };

  const store = {
    getAll: () => {
      try {
        const todos = window.localStorage.getItem('todos');

        if (!todos) return [];

        return JSON.parse(todos);
      } catch (error) {
        console.warn('Error fetching todos from storage.');
        return [];
      }
    },
    save: (todos) => {
      try {
        const todosString = JSON.stringify(todos);

        window.localStorage.setItem('todos', todosString);
      } catch (error) {
        console.warn('Error saving todos into storage.');
      }
    },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'loadTodos':
        return { todos: action.todos };
      case 'addTodo':
        return {
          todos: [
            {
              id: generateID(),
              completed: false,
              text: action.todo,
              date: Date.now(),
            },
            ...state.todos,
          ],
        };
      case 'removeTodo':
        return {
          todos: state.todos.filter(todo => todo.id !== action.todoId),
        };
      case 'completeTodo':
        return {
          todos: state.todos.map((todo) => {
            if (todo.id === action.todoId) {
              todo.completed = true;
            }

            return todo;
          }),
        };
      case 'removeAllTodos':
        return {
          todos: state.todos.filter(todo => todo.completed === false),
        };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  const countCompleted = () => {
    if (state.todos.length === 0) return 0;

    return state.todos.filter(todo => todo.completed).length;
  };

  useEffect(() => {
    if (!loading) return;

    dispatch({ type: 'loadTodos', todos: store.getAll() });
    setLoading(false);
  }, [setLoading, dispatch, loading, store]);

  useEffect(() => {
    if (loading) return;

    store.save(state.todos);
  }, [loading, state.todos, store]);

  return (
    <main>
      <TodoPage>
        <TodoForm dispatch={dispatch} />
        <TodoListHeader
          todosCount={state.todos.length}
          todosCompleted={countCompleted()}
          dispatch={dispatch}
        />
        <TodoListing
          dispatch={dispatch}
          todos={state.todos}
          loading={loading}
        />
      </TodoPage>
    </main>
  );
};

export default Index;
