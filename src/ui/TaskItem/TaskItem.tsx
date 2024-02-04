import React, { useContext } from "react";
import style from "./TaskItem.module.scss";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";
import { TodosContextType } from "../../app/providers/TodosContext/TodosProvider";
import Task from "../../app/types/task";

export const TaskItem: React.FC<Task> = ({ text, done, id }) => {
  const context = useContext(TodosContext);
  const { toggleTaskDone, removeTask } = context as TodosContextType;

  return (
    <li className={style.task__item}>
      <label className={style.task__label}>
        <input
          onChange={() => toggleTaskDone(id)}
          type="checkbox"
          className={style.task__checkbox}
          checked={done}
        />
        <span className={style.task__text}>{text}</span>
      </label>

      <button className={style.task__btn_edit}>✏️</button>
      <button onClick={() => removeTask(id)} className={style.task__btn_delete}>
        ❌
      </button>
    </li>
  );
};
