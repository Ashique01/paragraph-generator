import { useState } from "react";
import Paragraph from "./Paragraph";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Paragraph />
    </>
  );
}

export default App;
