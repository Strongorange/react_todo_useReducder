// import React from "react";
// import AddToDo from "./AddToDo";
// import { useState } from "../context";
// import List from "./List";
// import ToDo from "./ToDo";

// function App() {
//   const { toDos, completed } = useState();
//   return (
//     <>
//       <h1>Add toDos</h1>
//       <AddToDo />
//       <List name={"To Do"}>
//         {toDos.map((toDo) => (
//           <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
//         ))}
//       </List>
//       <List name={completed.length !== 0 ? "Completed" : ""}>
//         {completed.map((toDo) => (
//           <ToDo
//             key={toDo.id}
//             id={toDo.id}
//             text={toDo.text}
//             isCompleted={true}
//           />
//         ))}
//       </List>
//     </>
//   );
// }

// export default App;

import React from "react";
import Add from "./AddToDo";
import List from "./List";
import { useState } from "../context";
import ToDo from "./ToDo";

function App() {
  const { toDos, completed } = useState();
  return (
    <>
      <Add />
      <List name={"To Do"}>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} id={toDo.id} text={toDo.text} />
        ))}
      </List>
      <List name={completed.length !== 0 ? "Completed" : ""}>
        {completed.map((toDo) => (
          <ToDo
            key={toDo.id}
            id={toDo.id}
            text={toDo.text}
            isCompleted={true}
          />
        ))}
      </List>
    </>
  );
}

export default App;
