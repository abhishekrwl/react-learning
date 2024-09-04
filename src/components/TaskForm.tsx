import React, { useContext, useState } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import { TasksProps } from '../types/TaskList';
import { TaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const { setTasks, tasks } = useContext(TaskContext);
  const [task, setTask] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = () => {
    let allTasks: TasksProps[] = tasks;
    let taskId = allTasks.length > 0 ? allTasks[allTasks.length - 1].id + 1 : 1;
    const taskData = {
      id: taskId,
      task,
      isDone: false,
    };
    setTasks([...tasks, taskData]);
    setTask('');
  };

  return (
    <>
      <div>
        <div className='p-4 flex justify-between'>
          <Input
            value={task}
            onChange={(e) => handleInput(e)}
            name={'task'}
            placeHolder={'Enter your task here'}
          />
          <Button
            className='bg-blue-500 text-white hover:bg-white hover:text-blue-500 border border-blue-500'
            onClick={handleTaskSubmit}
          >
            Add Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
