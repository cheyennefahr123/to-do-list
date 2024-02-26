import "./App.css";
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ToDoListForm from "./Components/ToDoListForm/ToDoListForm";
import ToDoList from "./Components/ToDoList/ToDoList";


function App() {
    const [ToDoListItems, setToDoListItems] = useState ([
        {
            id: nanoid(),
            date: "01/27/2024",
            priority: "Low",
            link: "N/A",
            description: "N/A"
        },
        {
            id: nanoid(),
            date: "01/31/2025",
            priority: "High",
            link: "N/A",
            description: "N/A"
        }

    ]);

    function addItem(date, link, description, priority) {
        setToDoListItems(oldItems => [
            ...oldItems,
            {
                id: nanoid(),
                date,
                priority,
                link,
                description,
            }
        ]);

    }

    function deleteItem(id) {
        setToDoListItems(oldItems => oldItems.filter(item => item.id !== id));
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>To Do List</h1>
                <p>Add your tasks below</p>
            </header>
            <main>
                <ToDoListForm addItem={addItem} />
                <ToDoList 
                    ToDoListItems={ToDoListItems} 
                    deleteItem={deleteItem}/>
            </main>
        </div>
    );
}

export default App;

