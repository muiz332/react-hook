import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Detil from './components/Detil';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Post from './nested-components-detil/Post';
import Product from './nested-components-detil/Product';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:id' element={<Detil />} >
                <Route path='post' element={<Post />} />
                <Route path='product' element={<Product />} />
              </Route>
              <Route path='/login' element={<Login />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;