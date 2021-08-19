import React, { useState } from "react";
import { useDispatch2, useState2 } from "../context2";
import { ADD } from "../actions";

const Form = () => {
  const [value, setValue] = useState("");
  const dispatch2 = useDispatch2();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch2({ type: ADD, payload: value });
    setValue("");
  };
  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 추가하세요"
        type="text"
        onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default Form;
