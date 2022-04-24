import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Detil = () => {

    // nah karena sebelumnya kita buat url kehalaman detil
    // itu wajib mengirimkan parameter id
    // ya itu adalah nama parameternya yang kita buat sebelumnya

    /*
    
    disini kita inisialisasikan dulu
    baru kemudian kita tangkap parameternya
    sesuai dengan nama parameternya yaitu id
    
    */

    const {id} = useParams()
    const [detil,setDetil] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => res.json())
         .then(res => {
             setDetil(res)
             console.log(res)
         })
         .catch(err => console.log(err))
    },[id])



    return ( <section>
        <h1>ini adalah halaman Detil</h1>
        <p>parameternya {id}</p>
        <pre>
            {
            
            JSON.stringify(detil,null,2)
            }
        </pre>
    </section> );
}
 
export default Detil;

/*

nah kalo misakan kita klik tombol go to detil maka dia akan mengirimkan 
parameter idnya sesuai dengan id data jsonnya


nah setelah kita berhasil menangkap parameternya
kita fecth lagi ke APInya  untuk menampilkan hasil detilnya

kita bungkus menggunakan use effect
nah ketika awalnya kan kosong useParamsnya

nah ketika ada perubahan atau ada id yang dikirimkan
maka request ke API 

jadi kita pakai use effectnya sesuai dengan perubahan idnya
bukan pertama kali dia dirender

untuk memunculkannya sebagai string kalian bisa tulis 
            JSON.stringify(detil,null,2)

atau untuk memunculkannya satu satu kalian 
bisa ketikkan detil. nama propertinya 

jadi seperti itu bagaimana cara kita menangkap sebuah parameter
yang dikirimkan dari halaman lain

mudah mudahan kalian paham



*/