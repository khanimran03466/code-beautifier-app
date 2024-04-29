import { createContext, useState } from "react";

export const myContext = createContext("");



const StoreComponent = ({ children }) => {



  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handlerInput = (event) => {
    setInput(event.target.value);
  };

  return (
    <myContext.Provider value={{ input, setInput, output, setOutput, handlerInput }}>
      {children}
    </myContext.Provider>
  );
};

export default StoreComponent;
