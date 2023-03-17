import React from "react";

const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [mode, setMode] = React.useState("light");

  const modeTogglerHandler = () => {
    return setMode((prevMode) => {
      return prevMode === "light" ? "dark" : "light";
    });
  };
  return (
    <ThemeContext.Provider value={{ mode, modeToggle: modeTogglerHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeContext };
