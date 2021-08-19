import React from "react";

const List2 = ({ name, children }) => {
  return (
    <>
      <h1>{name}</h1>
      <ul>{children}</ul>
    </>
  );
};

export default List2;
