import './App.css';
import ToDoList from './components/ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div >
      <header className='App-header'>
        <ToDoList></ToDoList>
      </header>
    </div>
  );
}

export default App;
