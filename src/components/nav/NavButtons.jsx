import { Link, NavLink } from "react-router-dom";
import "./nav.scss";
import navJson from "/public/nav.json";
import { useContext, useEffect, useRef } from "react";
import { myContext } from "../../store/StoreComponent";

const NavButtons = () => {
  const { setInput, setOutput } = useContext(myContext);
  const navButtonRef = useRef(null);
  const handleNavButton = (e) => {
    setInput("");
    setOutput("");
  };

  useEffect(() => {
    navButtonRef.current.addEventListener("click", handleNavButton);

    return () => {
      navButtonRef.current.removeEventListener("click", handleNavButton);
    };
  }, []);

  return (
    <nav>
      <ul>
        {navJson.map((item) => (
          <li key={item.id}>
            <NavLink to={item.url} ref={navButtonRef} onClick={handleNavButton}>
              {item.btnName}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavButtons;
