import React from "react";
import Form from "./Form";
import List2 from "./List2";
import Item2 from "./Item2";
import { useState2 } from "../context2";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App2 = () => {
  const { toDos, completed } = useState2();

  return (
    <>
      <Container>
        <Form />
        <List2 name="To Dos">
          {toDos.map((toDo) => (
            <Item2
              key={toDo.id}
              text={toDo.text}
              id={toDo.id}
              isCompleted={false}
            />
          ))}
        </List2>
        <List2 name={completed.length !== 0 ? "Completed" : ""}>
          {completed.map((toDo) => {
            return (
              <Item2
                key={toDo.id}
                id={toDo.id}
                text={toDo.text}
                isCompleted={true}
              ></Item2>
            );
          })}
        </List2>
      </Container>
    </>
  );
};

export default App2;
