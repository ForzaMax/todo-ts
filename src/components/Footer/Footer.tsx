import React, { useContext } from "react";
import { Button } from "../../ui/Button/Button";
import style from "./Footer.module.scss";
import { TodosContext } from "../../app/providers/TodosContext/TodosProvider";
import { TodosContextType } from "../../app/providers/TodosContext/TodosProvider"; // Импортируйте тип контекста, если он определен в отдельном файле

export const Footer = () => {
  const context = useContext(TodosContext);

  // Утверждение типа для гарантии, что контекст не null
  const { removeAllTasks, removeCompletedTasks } = context as TodosContextType;

  return (
    <footer className={style.footer}>
      <Button onClick={removeCompletedTasks} type="remove_done">
        Удалить завершенные
      </Button>
      <Button onClick={removeAllTasks} type="remove_all">
        Удалить все
      </Button>
    </footer>
  );
};
