import { useState } from 'react';
import TaskForm from './TaskForm';
import TasksList from './TasksList';
import { TasksProps } from '../types/TaskList';

function TodoList() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  return (
    <>
      <div className='flex items-center justify-center h-screen'>
        <div className='container max-w-xl p-10 border border-blue-400 min-h-96'>
          <h1 className='text-3xl'>Todo List</h1>
          <div>
            <TaskForm setTasks={setTasks} tasks={tasks} />
          </div>
          <TasksList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
