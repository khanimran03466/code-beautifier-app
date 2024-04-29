import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";

const CssMinifyBtn = () => {
  const { input, setOutput } = useContext(myContext);

  const handlerCSSMinify = () => {
    let MinifyCss = input.replace(/\/\*[\s\S]*?\*\/|([^:]|^)\/\/.*$/gm, "");
    MinifyCss = MinifyCss.replace(/\s+/g, " ")
      .replace(/\s*([:;{}])\s*/g, "$1")
      .replace(/\s*([,+>])\s*/g, "$1")
      .replace(/\s+!/g, "!")
      .replace(/ !/g, "!")
      .replace(/: /g, ":")
      .replace(/, /g, ",");

    MinifyCss = MinifyCss.trim();

    setOutput(MinifyCss);
  };

  return (
    <div className="controls">
      <button type="button" className="btn-format" onClick={handlerCSSMinify}>
        Minify CSS
      </button>
    </div>
  );
};

export default CssMinifyBtn;
