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

    return (
        <div className="App">
            <header className="App-header">
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
            </header>
            <main>
                <ToDoListForm />
                <ToDoList ToDoListItems={ToDoListItems} />
            </main>
        </div>
    );
}

export default App;

