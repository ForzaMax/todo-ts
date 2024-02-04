import React, { useContext } from "react";
import style from "./TaskList.module.scss";
import { TaskItem } from "../../ui/TaskItem/TaskItem";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";
import { TodosContextType } from "../../app/providers/TodosContext/TodosProvider";

export const TaskList = () => {
  const context = useContext(TodosContext)
  const {tasks} = context as TodosContextType

  return (
    <ul className={style.task__list}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          text={task.text}
          done={task.done}
          id={task.id}
        />
      ))}
    </ul>
  );
};
