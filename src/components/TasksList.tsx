import Task from './Task';
import { TasksProps } from '../types/TaskList';
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

const TasksList: React.FC = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    task: TasksProps
  ) => {
    const updateTasks = tasks?.map((taskData, key) =>
      taskData.task === task.task
        ? { ...taskData, isDone: e.target.checked }
        : taskData
    );
    setTasks(updateTasks);
  };

  const handleRemoveTask = (taskId: number) => {
    const updatedTasks = tasks?.filter((taskData) => taskData.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleUpdateTask = (taskId: number, updatedTask: string) => {
    const updatedTasks = tasks?.map((task) =>
      task.id === taskId ? { ...task, task: updatedTask } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='h-96 overflow-y-auto'>
      {tasks.length > 0 && (
        <>
          {tasks?.map((taskData, key) => (
            <div key={key}>
              <Task
                task={taskData}
                handleCheckboxChange={handleCheckboxChange}
                handleRemoveTask={handleRemoveTask}
                indexValue={key}
                handleUpdateTask={handleUpdateTask}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default TasksList;
