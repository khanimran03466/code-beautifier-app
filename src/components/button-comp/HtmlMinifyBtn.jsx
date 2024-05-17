import { useContext } from "react";
import { myContext } from "../../store/StoreComponent";

const HtmlMinifyBtn = () => {
  if (typeof process === "undefined") {
    var process = {
      env: {
        NODE_ENV: "production" // You can adjust this value based on your needs
      }
    };
  }
  const { input, setOutput } = useContext(myContext);

  const handlerHtmlMinify = () => {
    const minified = input
      // .replace(/<!--[\s\S]*?-->/g, "")
      // Remove CSS comments-
      .replace(/\/\*[\s\S]*?\*\//g, "")
      // Remove whitespace between tags
      .replace(/>\s+</g, "><")
      // Replace multiple spaces with single space
      .replace(/\s+/g, " ")
      // Minify CSS code within <style> tags while preserving <style> tags
      .replace(/<style.*?>([\s\S]*?)<\/style>/gi, (match, p1) => {
        return match.replace(p1, p1.replace(/\s+/g, " "));
      })
      .trim();

    

    setOutput(minified);
  };

  return (
    <div className="controls">
      <button type="button" className="btn-format" onClick={handlerHtmlMinify}>
        Minify HTML
      </button>
    </div>
  );
};

export default HtmlMinifyBtn;
