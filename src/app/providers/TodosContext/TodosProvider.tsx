import { createContext, useState, useEffect, ReactNode } from "react";
import Task from "../../types/task";

// Определение типа для контекста
export interface TodosContextType {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  toggleTaskDone: (id: number) => void;
  removeAllTasks: () => void;
  removeCompletedTasks: () => void;
  removeTask: (id: number) => void;
};

// Создание контекста с начальным значением типа или null
export const TodosContext = createContext<TodosContextType | null>(null);

// Определение типа для пропсов провайдера
type TodosProviderProps = {
  children: ReactNode;
};

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const savedTasks = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_LS_TODO_KEY || "") || "[]"
  ) as Task[];
  const initialState: Task[] = savedTasks ?? [];

  const [tasks, setTasks] = useState<Task[]>(initialState);

  useEffect(() => {
    localStorage.setItem(
      process.env.REACT_APP_LS_TODO_KEY || "",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  function removeAllTasks() {
    setTasks([]);
  }

  function removeCompletedTasks() {
    setTasks(tasks.filter((task) => !task.done));
  }

  function toggleTaskDone(id: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  }

  function removeTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const contextValue: TodosContextType = {
    tasks,
    setTasks,
    toggleTaskDone,
    removeAllTasks,
    removeCompletedTasks,
    removeTask,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};