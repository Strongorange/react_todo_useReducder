import React from "react";
import { useDispatch2 } from "../context2";
import { COMPLETE, DEL, UNCOMPLETE } from "../actions";

const Item2 = ({ text, id, isCompleted }) => {
  const dispatch2 = useDispatch2();
  return (
    <li>
      <span>{text}</span>
      <span onClick={() => dispatch2({ type: DEL, payload: id })}>❌</span>
      <span
        onClick={() =>
          dispatch2({ type: isCompleted ? UNCOMPLETE : COMPLETE, payload: id })
        }
      >
        {isCompleted ? " 🙅🏼‍♂️" : "✅"}
      </span>
    </li>
  );
};

export default Item2;
