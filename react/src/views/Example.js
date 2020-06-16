import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewTodo } from '../components/todo/action/index';
const Example = () => {
const [newTodo, setNewTodo] = useState('');
const [todos, setTodos] = useState([]);

const example = useSelector(state => state.todo.example);
console.log('example', example);
const dispatch = useDispatch();

const onNewTodoChange = useCallback(
    (event) => {
    setNewTodo(event.target.value)
    console.log(event.target.value)
    },[]
);
const formSubmitted = useCallback((event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    const param = {
        example: newTodo
    };
    const action = addNewTodo(param);
    dispatch(action);
    console.log('form was submitted')
    setTodos([
    {
        id: todos.length ? todos[0].id + 1 : 1,
        content: newTodo,
        done: false
    },
    ...todos
    ])
    setNewTodo('');
}, [newTodo, todos]);

const addTodo = useCallback((todo, index) => (event) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, {
    ...todo,

    done: !todo.done
    })
    setTodos(newTodos)
}, [todos])

const removeTodo = useCallback((todo) => (event) => {
    setTodos(todos.filter(otherTodo => otherTodo !== todo));
}, [todos]);

const markAllDone = useCallback(() => {
    // create a copy of the array
    // create a copy of each of the items
        // update the done property to be true on each of the new items
    const updatedTodos = todos.map(todo => {
    return {
        ...todo,
        done: true,
    };
    });
    setTodos(updatedTodos);
}, [todos]);

useEffect(() => {
    console.log('todos', todos)
}, [todos])

return (
    <div className="App">
        <div>{example}</div>
    <form onSubmit={formSubmitted}>
        <label>Enter a Todo: </label>
        <input
        id="newTodo"
        name="newTodo"
        value={newTodo}
        onChange={onNewTodoChange}
        />
    <button>add Todo</button>
    </form>
    <button onClick={markAllDone}>Mark All Done</button>
    <ul>
        {todos.map((todo, index) => (
        <li 
            key={todo.id}>
            <input
            checked={todo.done}
            type="checkbox"
            onChange={addTodo(todo, index)}
            />
            <span className={todo.done ? 'done': ''}>{todo.content}</span>
            <button onClick={removeTodo(todo)}>Remove Todo</button>
        </li>
        ))}
    </ul>
    </div>
);
}

export default Example;
