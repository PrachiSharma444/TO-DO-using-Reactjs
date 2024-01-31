import {useState} from 'react';
import './App.css';

function App() {

  const [todos , setTodos] = useState([]);
  const [task , setTask] = useState('');

  const addTodo = () => {
    if(task.trim() !=='') {
      setTodos([...todos , task]);  //If not empty, it updates the todos state by adding the current task to the existing array of todos using the spread operator (...), and then it resets the task state to an empty string.
      setTask(''); 
    }
  };

  const deleteTodo = (index) => {
    const newTodo = [...todos];  //Creates a copy of the todos array using the spread operator.
    newTodo.splice(index,1);  //Uses the splice method to remove the todo at the specified index
    setTodos(newTodo);
  };

  return (
   <div>
    <h1> To Do App</h1>
    <input 
    type="text"
    value={task}
    onChange = {(e) => setTask(e.target.value)} 
    />
    <button onClick={addTodo}>Add Todo</button>
   
   <ul>
    {todos.map((todo, index) => (
        <li key={index}>
        {todo}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    ))}
   </ul>
   </div>
  );
};

export default App;
