import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isShowModal, setIsSHowModal]  = useState(false);
  const [isShowSide, setIsShowSide] = useState(false);


  let showModal = () => {
    setIsSHowModal(true)
  }

  let closeModal = () => {
    setIsSHowModal(false)
  }

  let showSide = () => {
    setIsShowSide(true)
  }

  let closeSidebar = () => {
    setIsShowSide(false)
  }

  return (
    <AppContext.Provider
      value={{
        isShowModal,
        showModal,
        closeModal,
        showSide,
        isShowSide,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
