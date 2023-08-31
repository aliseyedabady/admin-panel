import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/theme";
import Btn from "../form/button";
import { ChevronDown } from "tabler-icons-react";
import { useState } from "react";
import DropDown from "../dropdown";
const Header = () => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState({
    app: false,
  });
  return (
    <>
      <nav className="flex mb-4">
        <button onClick={() => dispatch(toggle())}>
          <RxHamburgerMenu size={"1.5rem"} />
        </button>
        <Btn
          onClick={() => setMenu({ app: !menu.app })}
          text="اپ"
          classNames="mr-2 "
          leftIcon={() => {
            return (
              <>
                <ChevronDown size={"1rem"} strokeWidth={2} color={"black"} />
              </>
            );
          }}
        />
        <DropDown show={menu.app}>
          <p>fawfwa</p>
        </DropDown>
      </nav>
    </>
  );
};

export default Header;
