import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './component/Header'
import List from './component/List'


// function App() {
//   const [getMahasiswa, setMahasiswa] = useState([
//     {
//       id : "1",
//       nama : "muiz",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "2",
//       nama : "ilhan",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "3",
//       nama : "tito",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "4",
//       nama : "romy",
//       jurusan : "teknik informatika"
//     },
//   ])


//   const deleteMahasiswa = (id) => {
//     const newData = getMahasiswa.filter(value => value.id != id)
//     setMahasiswa(newData)
//   }


//   // kita buat useEffect

//   useEffect(function(){
    
//     console.log('useEffect is running ')
//   })



//   return (
//     <div className="App">
//       <Header />
//       <List getMahasiswa={getMahasiswa} deleteMahasiswa={deleteMahasiswa}/>
//     </div>
//   )
// }

/* 

kalo kita jalankan kita lihat diconsolenya
maka akan tampil console.logmya 

itu artinya fungsi useEffect ini dijalankan pada saat page load
nah ketika ada perubahan pada DOMnya 

misalnya saya hapus datanya pada listnya
maka useEffect ini akan dijalankan lagi

jadi setiap ada rendering
maka useEffect akan dijalankan

nah sama seperti componendDidMount
useEffect bisa kita gunakan setelah melakukan render

nah caranya kalian bisa tambahkan 
array kosong pada parameter keduanya
  useEffect(function(){
    
    console.log('useEffect is running ')
  },[])

artinya useEffect tersebut akan dijalankan 
setelah semua component dirender pertama kali


*/

// function App() {
//   const [getMahasiswa, setMahasiswa] = useState([
//     {
//       id : "1",
//       nama : "muiz",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "2",
//       nama : "ilhan",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "3",
//       nama : "tito",
//       jurusan : "teknik informatika"
//     },
//     {
//       id : "4",
//       nama : "romy",
//       jurusan : "teknik informatika"
//     },
//   ])


//   const deleteMahasiswa = (id) => {
//     const newData = getMahasiswa.filter(value => value.id != id)
//     setMahasiswa(newData)
//   }


//   // kita buat useEffect

//   useEffect(function(){
    
//     console.log('useEffect is running ')
//   },[])



//   return (
//     <div className="App">
//       <Header />
//       <List getMahasiswa={getMahasiswa} deleteMahasiswa={deleteMahasiswa}/>
//     </div>
//   )
// }


/* 

jadi setelah componentnya dirender
maka useEffect akan dijalankan 

ketika ada render selanjutnya
maka useEffect ini tidak akan dijalankan

jadi hanya 1 kali saat pertama kali
componentnya dirender baru dia bisa jalan


sama persis seperti componentDidMount

nah selanjutnya ketika statenya diupdate
kita coba

kita akan buat state baru name misalnya
ketika tombol saya klik ubah statenya


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

  const [getNama,setNama] = useState('Muiz')


  const deleteMahasiswa = (id) => {
    const newData = getMahasiswa.filter(value => value.id != id)
    setMahasiswa(newData)
  }


  // kita buat useEffect

  useEffect(function(){
    
    console.log('useEffect is running ')
  },[getNama])

  // tapi kita masukkan statenya pada arraynya


  return (
    <div className="App">
      <Header />
      <List getMahasiswa={getMahasiswa} deleteMahasiswa={deleteMahasiswa}/>
      <h3>{getNama}</h3>
      <button onClick={() => setNama('ilhan')} >klik</button>
    </div>
  )
}


/* 

jadi dia akan berjalan
ketika pertama kali pagenya diload

dan ketika ada perubahan pada state Namanya

jadi seperti itu lah penggunaan dari  useEffect

yang pertama kita bisa gunakan saat 
setiap componentnya dirender

kedua kita bisa gunakan pada saat 
componentnya pertama kali dirender

dan kita bisa gunakan pada saat
pagenya diload dan statenya diupdate


mudah mudahan kalian paham ya


*/


export default App
