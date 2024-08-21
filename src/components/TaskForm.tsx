import React, { useState } from 'react';

type TasksProps = {
  task: string;
  isDone: boolean;
};

type TaskFormProps = {
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
  tasks: TasksProps[];
};

const TaskForm: React.FC<TaskFormProps> = ({
  setTasks,
  tasks,
}: TaskFormProps) => {
  const [task, setTask] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleTaskSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    const taskData = {
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
          <input
            className='p-2 border rounded focus:outline-none'
            value={task}
            name='task'
            placeholder='Enter your task here'
            onChange={(e) => handleInput(e)}
          />
          <button
            className='bg-blue-500 p-2 rounded text-white hover:bg-white hover:text-blue-500 border border-blue-500'
            onClick={(e) => handleTaskSubmit(e)}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
