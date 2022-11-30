import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Header />
      <RoutesApp />
    </BrowserRouter>
  );
}

export default App;
