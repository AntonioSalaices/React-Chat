import Header from '../../basics/Header/Header';
import {LayoutProps} from './Layout.props';

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <div>
      <Header></Header>
      {children}
    </div>
  )
}

export default Layout;