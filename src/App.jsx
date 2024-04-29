import { Outlet } from "react-router-dom";
import "./App.css";
import InputArea from "./components/input-output-box/InputArea";
import OutputArea from "./components/input-output-box/OutputArea";
import NavButtons from "./components/nav/NavButtons";
import StoreComponent, { myContext } from "./store/StoreComponent";

function App() {
  return (
    <div className="conatiner">
      <StoreComponent>
        <NavButtons />
        <div className="input_output_wrraper">
          <InputArea />
          <Outlet />
          <OutputArea />
        </div>
      </StoreComponent>
    </div>
  );
}

export default App;
