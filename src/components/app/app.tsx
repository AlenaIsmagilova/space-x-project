import { useState } from "react";
import BurgerMenu from "../burger-menu/burger-menu";
import Header from "../header/header";
import MainContent from "../main/main-content";

const App = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);

  const handleClick = () => {
    setIsBurgerMenuOpened((val) => !val);
  };

  return (
    <>
      {isBurgerMenuOpened ? (
        <BurgerMenu handleCloseClick={handleClick} />
      ) : (
        <>
          <Header handleClick={handleClick} />
          <MainContent />
        </>
      )}
    </>
  );
};

export default App;
