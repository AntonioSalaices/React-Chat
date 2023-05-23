import Layout from './components/composed/Layout/Layout';
import Home from './screens/home/home';

const App = (): React.ReactElement => {

  return (
      <Layout>
        <Home /> 
      </Layout>
  );
}

export default App;
