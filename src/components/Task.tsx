import React, { useState } from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import Input from './elements/Input';
import Button from './elements/Button';
import { TasksProps } from '../types/TaskList';

type ParentProps = {
  task: TasksProps;
  handleCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    task: TasksProps
  ) => void;
  handleRemoveTask: (taskId: number) => void;
  indexValue: number;
  handleUpdateTask: (taskId: number, updatedTask: string) => void;
};

const Task: React.FC<ParentProps> = ({
  task,
  handleCheckboxChange,
  handleRemoveTask,
  indexValue,
  handleUpdateTask,
}) => {
  const [editField, setEditField] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');

  const { task: taskValue, id, isDone } = task;

  const handleEdit = () => {
    setEditField(true);
    setEditValue(taskValue);
  };

  const handleEditInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };
  const handleCancel = () => {
    setEditField(false);
    setEditValue('');
  };

  const handleUpdate = (taskId: number, updatedTask: string) => {
    handleUpdateTask(taskId, updatedTask);
    setEditField(false);
    setEditValue('');
  };

  return (
    <>
      {/* <div key={indexValue}> */}
      <div className='flex border border-t-0 border-l-0 border-r-0 text-left p-4 justify-between'>
        {!editField ? (
          <>
            <div className='flex gap-2 items-center'>
              <input
                onChange={(e) => handleCheckboxChange(e, task)}
                type='checkbox'
                value=''
                className='w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                checked={isDone ? true : false}
              />
              <div className={`${isDone ? 'line-through' : ''}`}>
                {taskValue}
              </div>
            </div>
            <div className='flex'>
              <MdEdit
                className='text-indigo-500 hover:text-indigos-700 cursor-pointer h-6 w-6'
                onClick={() => handleEdit()}
              />
              <MdDeleteForever
                className='text-red-500 hover:text-red-700 cursor-pointer h-6 w-6'
                onClick={() => handleRemoveTask(id)}
              />
            </div>
          </>
        ) : (
          <>
            <Input
              value={editValue}
              onChange={(e) => handleEditInput(e)}
              name={'editValue'}
              placeHolder={'Update your task here'}
            />
            <Button
              onClick={() => handleUpdate(id, editValue)}
              className='bg-green-500 text-white hover:bg-white hover:text-green-500 border border-green-500'
            >
              Update
            </Button>
            <Button
              onClick={handleCancel}
              className='bg-gray-500 text-white hover:bg-white hover:text-gray-500 border border-gray-500'
            >
              Cancel
            </Button>
          </>
        )}
      </div>
      {/* </div> */}
    </>
  );
};

export default Task;
