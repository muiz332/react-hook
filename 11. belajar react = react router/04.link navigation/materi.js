// link navigation

/*

nah dimateri kali ini kita akan belajar mengenai navigation
kalian bisa lihat didocumentasinya 

https://reactrouter.com/docs/en/v6/getting-started/overview

nah kita bisa membuat navigation atau berpindah dari suatu
halaman ke halaman yang lain

nah dikarenakan react ini adalah SPA dan kita hanya berpindah pindah
component kita tidak bisa menggunakan ancor element atau tag
a sebagai tag untuk berpindah halaman

didalam react menyediakan dua methode
yang pertama kita bisa menggunakan component link

caranya kalian tinggal import saja dari react router dom

import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

lalu seperti biasa kita bikin dulu navnya
jadi penggunaannya seperti tag a ya
kalian bisa menambhakan pathnya pada prpp to-nya



nah yang kedua kalian bisa menggunakan 
useNavigation

import { useNavigate } from "react-router-dom";

let navigate = useNavigate();
navigate(`/invoices/${newInvoice.id}`);

nah bisasanya ini kita pakai ketika kita sudah melakukan login
dan langsung dipindahkan kehalaman lain misalnya

nah itu kita bisa menggunakan useNavigate


untuk sekarang kita pelajar yang pertama dulu ya yaitu
menggunakan component link
























*/