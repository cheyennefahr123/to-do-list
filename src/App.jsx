import "./App.css";
import React, { useState } from 'react';
import ToDoListForm from "./Components/ToDoListForm/ToDoListForm";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
    const [ToDoListitems, setToDoListItems] = useState ([
        {
            date: "2024-01-27",
            priority: "Low",
            link: "N/A",
            description: "N/A"
        },
        {
            date: "2025-01-27",
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
                <ToDoList />
                <pre>
                    { JSON.stringify(ToDoListitems) }
                </pre>
            </main>
        </div>
    );
}

export default App;

