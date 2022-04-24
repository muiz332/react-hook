import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Detil from './components/Detil';
import Login from './components/Login';

/*

nah sekarang kita akan buat dulu beberapa component 
adalah component home,detil, dan login

nah ketika kita melakukan configuration pada
routenya kita membuhkan 3 component utama yang perlu 
kita import 

yang pertama yaitu browser router 
browser router ini adalah sebagai pembungkus yang harus kita taruh
dibagian luar 

sehingga nanti component component yang ada didalam 
bisa mengakses seluruh fitur yang ada didalam router domnya


lalu ada yang namanya Routes
didalam routes ini kita bisa definisikan route route apa saja
yang kita mau buat menggunakan component route

kita coba



*/

function App() {
  return (
    <div className="App">

      <BrowserRouter>
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

nah pada routenya itu kita tambahkan 2 attribute
ada path dan element

path ini adalah urlnya dan element ada componentya

jadi ketika diakses pathnya maka akan tampil 
component yang dikirimkan kedalam element

nah pada path detil kita tambahkan sebuah parameter
caranya kalian cukup tulis /: nama parameternya

disini saya kasih id, jadi /:id

nah kalo kita jalankan
maka akan tampil halaman home

ketika saya ingin pindah 
maka ketikkan /login atau kehalaman detil /1
untuk parameternya itu dinamis ya 

nah jadi sesimple ini untuk mengkonfigurasi route apa saja yang
ada didalam aplikasi react kita menggunakan react router dom 
versi 6

mudah mudahan kalian paham ya 

*/



export default App;
