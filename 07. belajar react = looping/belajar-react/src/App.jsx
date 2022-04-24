import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'


/* 
misalnya saya punya state dengan data seperti ini 
dan saya ingin menampilkan datanya menggunakan
tag list misalnya

kita tinggal looping saja linya menggunakan map


*/


function App() {
  const [getTitle, setTitle] = useState('welcome to my app')
  const [getAge,setAge] = useState(18)

  const [getMahasiswa,setMahasiswa] = useState([
    {
      id : 1,
      name : "Muhammad Mu'izzuddin",
      class : "Sp2.1",
      major : 'Informatics Engineering Department'
    },
    {
      id : 2,
      name : "Ilhan Juliansyah",
      class : "Sp2.1",
      major : 'Informatics Engineering Department'
    },
    {
      id : 3,
      name : "Muhammad Arief Ardiyanto",
      class : "Sp2.1",
      major : 'Informatics Engineering Department'
    },
    {
      id : 4,
      name : "Romy Muhammad Fadly",
      class : "Sp2.1",
      major : 'Informatics Engineering Department'
    }
  ])

  const Click = () => {
    setTitle('Selamat Datang')
    setAge(19)
  }

  return (
    <div className="">
      <Header />
      <h1>{getTitle}</h1>
      <h2>umur  {getAge}</h2>
      <button onClick={Click}>Click</button>

      <section>
        <h3>Mahasiswa</h3>
        <ul>
          {getMahasiswa.map(value => (
            <li key={value.id}>
              <h4>Name : {value.name}</h4>
              <p>Class : {value.class}</p>
              <p>Major : {value.major}</p>
            </li>
          ))}
        </ul>
      </section>



    </div>
  )
}


/* 

kalo kita jalankan sudah tampil ya
karena kita mereturn jsx sintax maka kita gunakan kurung biasa

dan kita kirimkan keynya yaitu idnya pada tag li
nah seperti itulah cara kita melooping array 
menggunakan react




*/

export default App
