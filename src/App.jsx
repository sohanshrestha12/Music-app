import React, { createContext, useContext, useState } from "react";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";
import Wrapper from "./assets/wrappers/AppLayout";

const MenuContext = createContext();

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <MenuContext.Provider value={{ isMenuVisible, toggleMenu }}>
      <Wrapper>
        <SideBar />
        <MainContainer />
      </Wrapper>
    </MenuContext.Provider>
  );
};
export const useMenuContext = () => useContext(MenuContext);
export default App;
