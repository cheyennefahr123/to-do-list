import "./App.css";
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ToDoListForm from "./Components/ToDoListForm/ToDoListForm";
import ToDoList from "./Components/ToDoList/ToDoList";
import Timer from './Components/Timer/Timer';

function getInitialState() {
    let savedState = localStorage.getItem('items');
    if (typeof savedState === 'string') {
        return JSON.parse(savedState);
    }
    return [];
}

function App() {
    const [ToDoListItems, setToDoListItems] = useState (getInitialState());

    function addItem(date, link, description, priority) {
        setToDoListItems(oldItems => {
            let newItems = [
                ...oldItems,
                {
                    id: nanoid(),
                    date,
                    priority,
                    link,
                    description,
                }
            ]
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        });   
    }

    function deleteItem(id) {
        setToDoListItems(oldItems => {
            let newItems = oldItems.filter(item => item.id !== id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return newItems;
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>To Do List</h1>
                <p>Add your tasks below</p>
            </header>
            <main>
                <Timer />
                <ToDoListForm addItem={addItem} />
                <ToDoList 
                    ToDoListItems={ToDoListItems} 
                    deleteItem={deleteItem}/>
            </main>
        </div>
    );
}

export default App;

