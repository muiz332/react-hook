import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Detil from './components/Detil';
import Login from './components/Login';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">



      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<Detil />} />
              <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}



export default App;
