import Header from '../../basics/Header/Header';
import Container from '../../basics/Container/Container';
import {LayoutProps} from './Layout.props';

const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <>
      <Header></Header>
      <Container>
        {children}
      </Container>
    </>
  )
}

export default Layout;