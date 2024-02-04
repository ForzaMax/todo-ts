import React, { useContext, FC } from "react";
import style from "./Input.module.scss";

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

export const Input: FC<InputProps> = ({ onChange, inputValue }) => {
  return (
    <input
      value={inputValue}
      onChange={onChange}
      className={style.input}
      type="text"
      placeholder="Новая задача"
    ></input>
  );
};
