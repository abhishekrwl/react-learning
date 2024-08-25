import React, { useState } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import { TasksProps } from './TaskList';

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
