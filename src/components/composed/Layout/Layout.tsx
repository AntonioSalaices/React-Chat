import { useContext, useEffect, useState } from "react";

import Header from "@Components/basics/Header/Header";
import Footer from "@Components/basics/Footer";
import Section from "../Section";

import useThrottle from "@Hooks/useThrottle/useThrottle";

import { ThemeContext } from "context/ThemeContext";
import { Theme } from "@Constans/Theme";
import { LayoutProps } from "./Layout.props";
import { Events } from "@Constans/eventConstants";
import { ScreenSize } from "@Constans/screenConstants";
import Formatter from "@Utils/formatter";
import { FaLaptop, FaMobileAlt } from "react-icons/fa";

const iconsScreen: Record<string, JSX.Element> = {
  [ScreenSize.XS]: <FaMobileAlt />,
  [ScreenSize.SM]: <FaMobileAlt />,
  [ScreenSize.MD]: <FaLaptop />,
  [ScreenSize.LG]: <FaLaptop />,
  [ScreenSize.XL]: <FaLaptop />,
};

const { sizeToRange } = Formatter;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [range, setRange] = useState<string>(sizeToRange(window.innerWidth));

  const handleOnChange = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem(Theme.THEME, selectedTheme);
  };

  useEffect(() => {
    window.addEventListener(Events.RESIZE, handleWindowResize);

    return () => {
      window.removeEventListener(Events.RESIZE, handleWindowResize);
    };
  }, []);

  const handleWindowResize = useThrottle(
    () => {
      setRange(sizeToRange(window.innerWidth));
    },
    100,
    []
  );

  return (
    <div className={theme}>
      <Header
        icon={iconsScreen[range]}
        theme={theme}
        onChange={handleOnChange}
      />
      {children}
      <Section />
      <Footer />
    </div>
  );
};

export default Layout;
