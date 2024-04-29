import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";
import beautify from "js-beautify";

const HtmlFormatterBtn = () => {
  const { input, setOutput } = useContext(myContext);

  const hanlderHtmlFormat = () => {
    const beautified = beautify.html(input, {
      indent_size: 2,
      wrap_attributes: "auto", // auto-close tags
      wrap_line_length: 80,
      end_with_newline: true,
    });
    setOutput(beautified);

  };

  return (
    <div className="controls">
      <button type="button" className="btn-format" onClick={hanlderHtmlFormat}>
        Format HTML
      </button>
    </div>
  );
};

export default HtmlFormatterBtn;
