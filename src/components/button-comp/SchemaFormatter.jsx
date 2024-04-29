import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";

const SchemaFormatter = () => {
  const { input, setOutput } = useContext(myContext);

  function extractJsonArray(inputCode) {
    const regex = /\[([\s\S]*?)\]/;
    const match = regex.exec(inputCode);

    if (match && match[1]) {
      return match[0]; // Entire matched array including brackets
      // Alternatively, return match[1]; // Only the content of the array without brackets
    }

    return null;
  }

  const handlerCommentRemove = () => {
    const inputCode = input;
    const extractedJsonArray = extractJsonArray(inputCode);
    if (extractedJsonArray !== null) {
      const finalOutputWithoutScript = extractedJsonArray;
      const finalOutputWithScript = `<script type='application/ld+json'> ${finalOutputWithoutScript} </script>`;
      setOutput(finalOutputWithScript);
    } else {
      setOutput("No JSON array found in the code.");
    }
  };

  return (
    <div className="controls">
      <button
        type="button"
        className="btn-format"
        onClick={handlerCommentRemove}
      >
        Remove Comment
      </button>
    </div>
  );
};

export default SchemaFormatter;
