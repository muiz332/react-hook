import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'

// nah misalnya saya ingin membuat judul

/* 

kita buat variable biasa

lalu kita buat tombol
jika tombolnya diklik

maka judulnya akan berubah

*/

// function App() {
//   let title = "welcome to my app"

//   const changeTitle = ()=>{
//     title = 'selamat datang'
//     console.log(title)
//   }

//   return (
//     <div className="App">
//       <Header />

//       <h1>{title}</h1>
//       <button onClick={changeTitle} >Change Title</button>
//     </div>
//   )
// }

/* 

kalo kita jalankan 
kalo kita lihat h1nya tidak akan berubah 

dia akan tetap welcome to my app
sedangkan didalam consolenya itu sudah berubah

nah kenapa bisa begitu?
karena meskipun variablenya berubah dia tidak dirender ulang
jadi h1nya tetap menggunakna value yang sebelumnya

nah supaya bisa mengubah variablenya sekaligus
secara otomatis merender ulang tag h1nya kita butuh useState hook

nah gimana cara menggunakan use state hook?
kita tinggal import saja


import { useState } from 'react'

lalu kita bikin variable
nah cara bikinnya seperti ini

const [getValue,setValue] = useState(0)

nah kita bikin variable seperti itu
use state mengembalikan array

value yang pertama itu nilainya 
dan value yang kedua itu adalah function yang mengubah statenya

jadi kita bisa destruckturing value pada arraynya 
menjadi variable terpisah

didalam kurung itu ada dua valuenya
yang pertama getValue dan setValue


nah didalam useState() argumentnya itu adalah nilai defaultnya
nah jika ingin mengubah kita bisa tuliskan

setValue() diisi dengan value yang mau diubah
perlu kalian ingat kata Value pada get dan set
itu bisa kalian ubah

tetapi get dan setnya itu sebaiknya jangan 
karena itu supaya memudahkan kita mana yang set dan mana yang get

untuk mengambil nilinya kita ambil pada variable getValue ya 

oke kita coba




*/


function App() {
  const [getTitle,setTitle] = useState('welcome to my app')
  const [getAge,setAge] = useState(18)

  const changeTitle = ()=>{
    setTitle('Selamat datang')
    setAge(19)
  }

  return (
    <div className="App">
      <Header />

      <h1>{getTitle}</h1>
      <h2>umur {getAge}</h2>
      <button onClick={changeTitle} >Change Title</button>
    </div>
  )
}


/* 

kita set nilai awanya itu adalah welcome to my app
nah selanjutnya kita tampilkan 

kita panggil getTitle pada tag h1nya 
ketika diklik ubah statenya menjadi Selamat datang

sekarang kita jalankan
oke ya sudah berubah 

nah ketika ada perubahan pada useState 
secara otomatis react akan merender ulang tag yang bersangkutan
disini adalah tag h1

kalo kaliam lihat jika diinspect 
elementnya itu yang berubah hanya h1nya saja

nah seperti itulah penggunaan useState hook pada react
mudah mudahan kalian paham




*/


export default App
