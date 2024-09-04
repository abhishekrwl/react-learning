import './App.css';
import TodoList from './components/TodoList';
import TaskProvider from './context/TaskContext';

function App() {
  return (
    <>
      <div className='App'>
        <TaskProvider>
          <TodoList />
        </TaskProvider>
      </div>
    </>
  );
}

export default App;
