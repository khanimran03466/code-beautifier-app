import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { myContext } from "../store/StoreComponent";
import { FaRegCopy } from "react-icons/fa";

const CopyToClipBoard = () => {
  const { output } = useContext(myContext);

  const handlerCopyToClipboard = async () => {
    if (output !== "") {
      try {
        await navigator.clipboard.writeText(output);
        toast.success("Copied to clipboard!");
      } catch (error) {
        console.error("Failed to copy:", error);
        toast.error("Failed to copy to clipboard!");
      }
    } else {
      toast.error("Output is Blank!");
    }
  };

  return (
    <>
      <button className="copy-to-clip" onClick={handlerCopyToClipboard}>
        Copy to Clipboard
        <FaRegCopy />
      </button>
      <ToastContainer />
    </>
  );
};

export default CopyToClipBoard;
