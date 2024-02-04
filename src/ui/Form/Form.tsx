import React from "react";
import style from "./Form.module.scss";

export const Form = ({ children }: { children: React.ReactNode }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.form}>
      {children}
    </form>
  );
};
