import React from "react";

const { Provider, Consumer } = React.createContext();

const ThemeContextProvider = (props) => {
  const [mode, setMode] = React.useState("light");

  const modeTogglerHandler = () => {
    return setMode((prevMode) => {
      return prevMode === "light" ? "dark" : "light";
    });
  };
  return (
    <Provider value={{ mode, modeToggle: modeTogglerHandler }}>
      {props.children}
    </Provider>
  );
};

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
