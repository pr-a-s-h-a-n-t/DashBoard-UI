

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <ToastContainer />
    </div>
  );
}

export default App;
