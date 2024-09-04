import { createContext, ReactNode, useEffect, useState } from 'react';
import { TasksProps } from '../types/TaskList';

type TaskProviderProps = { children: ReactNode };
type TaskContextTypes = {
  setTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
  tasks: TasksProps[];
};
export const TaskContext = createContext<TaskContextTypes>({
  setTasks: () => {},
  tasks: [],
});

function TaskProvider({ children }: TaskProviderProps) {
  const localTasks = localStorage.getItem('tasks');
  const [tasks, setTasks] = useState<TasksProps[]>(
    localTasks ? JSON.parse(localTasks) : []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskContext.Provider
        value={{
          setTasks,
          tasks,
        }}
      >
        {children}
      </TaskContext.Provider>
    </>
  );
}

export default TaskProvider;
