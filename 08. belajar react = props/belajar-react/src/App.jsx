import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import List from './component/List'


/* 

nah misalnya saya punya data seperti maka siswa
seperti dimateri sebelumnya

dan dimateri sebelumnya itu listnya saya dalam satu component 
yang sama dengan datanya

nah sekarang saya ingin bikin component list sendiri
dimana datanya nanti akan saya kirimkan kedalam component 
list tersebut



*/

function App() {
  const [getMahasiswa, setMahasiswa] = useState([
    {
      id : "1",
      nama : "Muhammad Mu'izzuddin",
      jurusan : "Teknik Informatika"
    },
    {
      id : "2",
      nama : "Ilhan",
      jurusan : "Teknik Informatika"
    },
    {
      id : "3",
      nama : "Tito",
      jurusan : "Teknik Informatika"
    },
    {
      id : "1",
      nama : "Romy",
      jurusan : "Teknik Informatika"
    },
  ])

  // nah kita kirimkan datanya pada component List
  // dan kita tangkap sebagai parameter

  return (
    <div className="App">
      <Header />
      <List getMahasiswa={getMahasiswa} />
    </div>
  )
}

/*

kalo kita jalankan maka datanya akan tampil ya
jadi seperti itu cara kita mengirimkan data dari
component induk ke component anak

mudah mudahan kalian paham


*/
export default App
