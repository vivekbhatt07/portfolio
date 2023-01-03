import { useState } from "react";

function ModeToggle(props) {
  const [mode, setMode] = useState(true);

  function changeModeHandler() {
    return setMode((prevMode) => {
      return !prevMode;
    });
  }

  return props.children(mode, changeModeHandler);
}

export default ModeToggle;
