import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Todos() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputvalue] = useState('');

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/todos/');
            setTasks(response.data);
            console.log(response);
        } catch (error) {
            console.log('error', error);
        }
    };

    const deleteTask = async (taskId) => { // ✅ Accept taskId
        try {
            await axios.delete(`http://127.0.0.1:8000/api/todos/${taskId}/delete`);
            const updatedTasks = tasks.filter(task => task.id !== taskId);
            setTasks(updatedTasks);
        } catch (error) {
            console.log('error', error);
        }
    };

    const addTask = async () => {
        try {
            if (inputValue.trim() !== '') {
                const response = await axios.post('http://127.0.0.1:8000/api/todos/add', {
                    title: inputValue,
                    completed: false
                });
                setTasks([...tasks, response.data]);
                setInputvalue('');
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    const toggleCompleted = async (taskId) => {
        try {
            const taskToUpdate = tasks.find(task => task.id === taskId);

            if (taskToUpdate) {
                const response = await axios.put(`http://127.0.0.1:8000/api/todos/${taskId}/update`, {
                    title: taskToUpdate.title,
                    completed: !taskToUpdate.completed
                });

                const updatedTasks = tasks.map(task =>
                    task.id === taskId ? { ...task, completed: response.data.completed } : task
                );
                setTasks(updatedTasks);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <div className="container">
            <div className="todo-app">
                <div className="app-title">
                    <h2>To-do app</h2>
                    <i className="fa-solid fa-book-bookmark"></i>
                </div>
                <div className="row">
                    <input
                        type="text"
                        id="input-box"
                        placeholder="Add your tasks"
                        value={inputValue}
                        onChange={e => setInputvalue(e.target.value)}
                    />
                    <button onClick={addTask}>Add</button>
                </div>
                <ul id="list-container">
                    {tasks.map(task => (
                        <li
                            key={task.id}
                            onClick={() => toggleCompleted(task.id)}
                            className={task.completed ? 'checked' : ''}
                        >
                            {task.completed ? <del>{task.title}</del> : task.title}
                            <span
                                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent toggle
                                    deleteTask(task.id);
                                }}
                            >
                                X
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
