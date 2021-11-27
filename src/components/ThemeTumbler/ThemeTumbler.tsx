import { url } from "inspector";

import { useCallback, useState } from "react";

import moonImg from "../../images/icon-moon.svg";
import sunImg from "../../images/icon-sun.svg";

import "@styles/style.css";

export type ThemeTumbleProps = {
  theme: string;
  setTheme: (theme: string) => any;
};
const ThemeTumble: React.FC<ThemeTumbleProps> = ({ theme, setTheme }) => {
  const handelClick = useCallback(() => {
    setTheme(theme === "_light" ? "_dark" : "_light");
  }, [theme, setTheme]);
  return (
    <header>
      <h1>TODO</h1>
      <input
        className="tumbler"
        onClick={handelClick}
        type="image"
        src={`${theme === "_light" ? sunImg : moonImg}`}
        alt="Submit"
        width="30"
        height="30"
      />
    </header>
  );
};

export default ThemeTumble;