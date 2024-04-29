import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";

const InputArea = () => {

  const {input, handlerInput} = useContext(myContext);

  return (
    <textarea
      value={input}
      onChange={handlerInput}
      className="large-area large-area--input"
      placeholder="Enter Your Code Here..."
    />
  );
};

export default InputArea;
