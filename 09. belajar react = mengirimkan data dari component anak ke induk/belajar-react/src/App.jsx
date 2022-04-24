import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import List from './component/List'


/* 

nah sekarang kita akan coba mengirimkan datanya dari anak
keinduk

kita pergi kehalaman List.jsx



*/

function App() {
  const [getMahasiswa, setMahasiswa] = useState([
    {
      id : "1",
      nama : "muiz",
      jurusan : "teknik informatika"
    },
    {
      id : "2",
      nama : "ilhan",
      jurusan : "teknik informatika"
    },
    {
      id : "3",
      nama : "tito",
      jurusan : "teknik informatika"
    },
    {
      id : "4",
      nama : "romy",
      jurusan : "teknik informatika"
    },
  ])


  const deleteMahasiswa = (id) => {
    // kita looping selain id yang dikirimkan
    const newData = getMahasiswa.filter(value => value.id != id)
    setMahasiswa(newData)
  }



  return (
    <div className="App">
      <Header />
      <List getMahasiswa={getMahasiswa} deleteMahasiswa={deleteMahasiswa}/>
    </div>
  )
}



/* 

kita jalankan
nah sudah ya ketika diklik delete akan dihapus

jika saya relog 
maka dia akan kembali seperti semula 

untuk kasus yang sebenarnya kita mungkin 
akan menghapusnya dari daatabase

jadi seperti itu penggunaan dari pops
mudah mudahan kalian paham ya 



*/


export default App
