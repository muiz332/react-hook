import { useState, useEffect, } from "react";
import {useNavigate} from 'react-router-dom'
import Tombol from "./cmp/tombol";


const Home = () => {
    const [user,setUser] = useState([])
    const [tambah,setTambah] = useState(0)
    const rdct = useNavigate()

    let [tes,setTes] = useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
         .then(res => res.json())
         .then(res => setUser(res))
         .catch(err => console.log(err))
    },[])

    const redirect = (id) => {
        rdct(`/${id}`)
    }

    return ( <section>
        <h1>ini adalah halaman home</h1>
        <ul>
            {
                user.map(dt => (
                    <li key={dt.id} >{dt.name} 

                    <button type="button" onClick={() => redirect(dt.id)} >go to detil</button>
                    
                    </li>
                ))
            }
        </ul>
        <input type="text" onChange={(e) => {
            setTambah( tambah + (+e.target.value))
            setTes(tes++)
        }} />

        <Tombol tes={tes} />
        
    </section> );
}
 
export default Home;


/*

kalo kita jalankan dan inputanya itu kita kasih nilai angka yang
nanti angka tersebut akan dijumlah kan pada state tambah

maka setiap perubahan state component tombol akan dirender
nah itu akan menjadi masalah ketika aplikasi kita sudah besar mungkin 
saja bisa menyebabkan proses yang lambat 

maka dari itu pada setiap component sebaiknya kita 
gunakan react.memo agar component tersebut dirender ketika
terjadi perubahan pada propsnya

dimana propsnya harus integer dan string
untuk boolean, function, dan object tidak akan dirender ulang

*/