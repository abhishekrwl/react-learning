import TaskForm from './TaskForm';
import TasksList from './TasksList';

function TodoList() {
  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='container max-w-xl p-10 border border-blue-400 min-h-96'>
          <h1 className='text-3xl'>Todo List</h1>
          <div>
            <TaskForm />
          </div>
          <TasksList />
        </div>
      </div>
    </>
  );
}

export default TodoList;
