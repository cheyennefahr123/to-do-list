import "./App.css";
import ToDoListForm from "./Components/ToDoListForm/ToDoListForm";
import ToDoList from "./Components/ToDoList/ToDoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Browser Parking Lot</h1>
                <p>Send most of your browser tabs into retirement.</p>
            </header>
            <main>
                <ToDoListForm />
                <ToDoList />
            </main>
        </div>
    );
}

export default App;

