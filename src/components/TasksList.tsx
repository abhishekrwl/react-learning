import React from 'react';

type TasksProps = {
  task: string;
  isDone: boolean;
};

type ParentProps = {
  tasks: TasksProps[];
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
};

const TasksList: React.FC<ParentProps> = ({ tasks, setTasks }) => {
  const handleChangeCheckBox = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updateTasks = tasks.map((task, key) =>
      key === index ? { ...task, isDone: e.target.checked } : task
    );
    setTasks(updateTasks);
  };

  const handleRemoveTask = (index: number) => {
    const updatedTasks = tasks.filter((task, key) => key !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='h-96 overflow-y-auto'>
      {tasks.map((taskData, key) => (
        <div
          className='flex border border-t-0 border-l-0 border-r-0 text-left p-4 justify-between'
          key={key}
        >
          <div className='flex gap-2 items-center'>
            <input
              onChange={(e) => handleChangeCheckBox(e, key)}
              type='checkbox'
              value=''
              className='w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            ></input>
            <div className={`${taskData.isDone ? 'line-through' : ''}`}>
              {taskData.task}
            </div>
          </div>
          <div>
            <button
              className='bg-red-500 p-2 rounded text-white hover:bg-white hover:text-red-500 border border-red-500'
              onClick={() => handleRemoveTask(key)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TasksList;
