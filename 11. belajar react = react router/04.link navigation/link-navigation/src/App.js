import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Detil from './components/Detil';
import Login from './components/Login';
import Navbar from './components/Navbar';

/*

misalnya kita buat dulu component navbarnya ya
lalu kita import


*/

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

/*

nah kalian harus memasukkan component navbarnya didalam browserRoute
ketika kalian menambahkan component navbar selain didalama browserRouter
maka kalian melakukan render diluar konteks routenya 

maka yang terjadi adalah router nya tidak mengetahui route apa saja 
yang digunakan untuk navigasinya

jadi kalian harus memasukkan Link ini didalam Browser Router ya

nah jadi seperti itu lah cara kita membuat Link
antar component

mudah mudahan kalian paham


*/



export default App;
