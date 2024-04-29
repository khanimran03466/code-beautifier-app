import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";

const JsMinifierBtn = () => {
  const { input, setOutput } = useContext(myContext);

  const handlerJsMinify = () => {
    let js = input.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
    js = js
      .replace(/\s+/g, " ")
      .replace(/ ([\{\}\(\)\[\]\+\-\*\/\=\>\<\?\!\:\,]) /g, "$1")
      .replace(/\s*([;\{\}\(\)\[\]\+\-\*\/\=\>\<\?\!\:\,])\s*/g, "$1")
      .replace(/;+/g, ";")
      .replace(/,+/g, ",")
      .replace(/\{\s+/g, "{")
      .replace(/\s+\}/g, "}")
      .replace(/;}/g, "}")
      .replace(/}\s+/g, "}")
      .replace(/\s+{/g, "{")
      .replace(/:\s+/g, ":")
      .replace(/\s+:/g, ":")
      .replace(/\(\s+/g, "(")
      .replace(/\s+\)/g, ")");

    js = js.trim();

    setOutput(js);
  };

  return (
    <div className="controls">
      <button type="button" className="btn-format" onClick={handlerJsMinify}>
        Minify Js
      </button>
    </div>
  );
};

export default JsMinifierBtn;
