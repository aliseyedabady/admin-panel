import React from "react";
import Sidebar from "../components/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div>
        <nav>
          <button>
            <RxHamburgerMenu />
          </button>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
