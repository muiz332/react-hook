import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

// misalnya kita buat component dengan nama navbar

function Navbar(){
  return (
      <ul>
        <li>Beranda</li>
        <li>About</li>
        <li>Product</li>
        <li>Contact</li>
    </ul>
  )
}

// kita bisa masukkan component navbar kedalam component lagi
// saya akan masukkan kedalam component App



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>selamat datang</h1>
//         <Navbar />

//       </header>
//     </div>
//   );
// }

/*

kalian save dan coba lihat didalam browser
maka component navbar yang isinya ul li akan tampil
didalam browser

tapi agar lebih rapi dan spesifik 
maka kita bisa pisahakan kedalam sebuah folder

misalnya saya buat folder namanya components
yang isinya Header tadi

idealnya didalam react itu penamaan file js harus menggunakan huruf besar diawal
kita pergi kehalaman Header

*/



function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

// untuk memanggilnya kita tinggal import Header saja 
// nanti otomatis react akan mendeteksi pathnya


/*

nah jadi seperti itu lah cara membuat component pada react
mudah mudahan kalian paham

*/

export default App;
