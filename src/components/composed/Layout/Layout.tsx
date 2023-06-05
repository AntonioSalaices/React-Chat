import Header from '@Components/basics/Header/Header';
import {LayoutProps} from './Layout.props';
import { useContext } from 'react';
import { ThemeContext } from 'context/ThemeContext';

const Layout: React.FC<LayoutProps> = ({children}) => {
  const {theme, setTheme} = useContext(ThemeContext);


  return (
    <div className={theme}>
      <Header theme={theme} onChange={setTheme}/>
      {children}
    </div>
  )
}

export default Layout;