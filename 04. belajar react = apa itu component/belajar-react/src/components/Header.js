import logo from '../logo.svg';
import './css/header.css'
// disini kita buat component headernya
// dan kita bisa kasih css dengan menimport file cssnya 
// dimana cssnya itu spesifik untuk headernya

function Header(){
    return <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>selamat datang</h1>
    </header>
}

// dan kita export untuk dapat digunakan difile terpisah

export default Header;

// pergi kehalaman app.js