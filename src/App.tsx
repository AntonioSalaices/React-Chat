import { Profiler } from 'react';
import Layout from './components/composed/Layout/Layout';
import Home from './screens/home/home';

const App = (): React.ReactElement => {



  function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    // console.log('DATA', id, phase, actualDuration, baseDuration, startTime, commitTime)
  }

  return (
      <Layout>
        <Profiler id="Navigation" onRender={onRender}>
            <Home /> 
        </Profiler>
      </Layout>
  );
}

export default App;
