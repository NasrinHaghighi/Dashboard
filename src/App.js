
import './App.css';
import Controller from './components/Controller/Controller';
import Status from './components/Status/Status';
import Layout from './components/Layout.js/Layout';
import Info from './components/Info/Info';

function App() {
  return (
    <Layout>
       <Controller />
       <Status />
       <Info />
    </Layout>
  
  );
}

export default App;
