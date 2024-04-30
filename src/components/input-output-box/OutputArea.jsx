import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";
import CopyToClipBoard from "../CopyToClipBoard";

const OutputArea = () => {
  const { output } = useContext(myContext);

  return (
    <div className="out-put">
      <CopyToClipBoard />
      <textarea
        value={output}
        className="large-area large-area--output"
        placeholder="Output" 
        readOnly
      />
    </div>
  );
};

export default OutputArea;
