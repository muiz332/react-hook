import { useState } from "react";
import { useCallback } from "react";
import Forgot from './cmp/lupa-password'

// const Login = () => {
//     let [tambah,setTambah] = useState(0)

//     return ( <section>
//         <h1>ini adalah halaman Login</h1>
//         <p>jumlah : {tambah}</p>
//         <Forgot inc={() => setTambah(tambah + 1)} />
//     </section> );
// }
 
// export default Login;


/*

nah kalo saya jalankan dan saya kalik
maka component forgot akan dirender ulang


nah kenapa bisa begitu harusnya kan tidak dirender ulang karena tidak
ada perubahan pada propsnya

nah kenapa bisa begitu 
karena setiap kali pemanggilan function javascript membacanya sebagai object baru

nah disini lah kita harus menggunakan useCallback
untuk menangani kasus seperti ini

kita coba



*/

// const Login = () => {
//     let [tambah,setTambah] = useState(0)

//     const inc = useCallback(() => {
//         setTambah(prev => prev + 1)

//         /*
        
//         akan tetapi kalian harus menuliskan setnya seperti dulu
//         dimana dia menerima callback yang memiliki 1 parameter yaitu
//         nilai tambahnya dan didalam function tersebut kita bisa langsung
//         menambahkan nilainya seperti itu

//         dan jangan lupa parameter kedua useCallback adalah pengaturan 
//         perubahannya 

//         karena didalamnya berfungsi untuk mengubah nilai dari statenya
//         bukan state nilai nya akan tetapi set statenya
        
//         */
//     },[setTambah])

//     return ( <section>
//         <h1>ini adalah halaman Login</h1>
//         <p>jumlah : {tambah}</p>
//         <Forgot inc={inc} />
//     </section> );
// }
 
// export default Login;


/*

kalo kita jalankan akan berhasil
componentnya akan dijalankan satu kali

nah sekarang bagaimana cara mengatasinya jika propsnya itu object


*/


const Login = () => {
    let [tambah,setTambah] = useState(0)

    const inc = useCallback(() => {
        setTambah(prev => prev + 1)
    },[setTambah])

    return ( <section>
        <h1>ini adalah halaman Login</h1>
        <p>jumlah : {tambah}</p>
        <Forgot inc={inc} mhs={{nama : "muiz",alamat : "wringinpitu"}} />
    </section> );
}
 
export default Login;

/*

nah kalo kita jalankan akan merender lagi componentnya 
padahal objectnya sama 

kenapa seperti itu karena {} === {} adalah false
ketika false maka dia akan merender ulang componentnya

nah cara mengatasinya kalian pergi kecomponentnya
lalu direact.memonya diparameter keduanya

kita pergi ke forgot.js

*/