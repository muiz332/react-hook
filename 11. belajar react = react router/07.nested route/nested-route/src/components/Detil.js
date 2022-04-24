import {useParams, Outlet,Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


/*

import dulu Outletnya ya dari react router dom

*/

const Detil = () => {


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

        <nav>
            <Link to={"post"}>post</Link><br/><br/>
            <Link to={"product"}>Product</Link>
        </nav>
        <hr />
        <Outlet/>



    </section> );
}


/*

nah kita tambahkan outletnya itu disini 
maka ketika urlnya itu cocok maka component yang menjadi anaknya
akan dirender dibawah hrnya

jadi outlet ini adalah letak dimaka component childnya
akan dirender

nah sekarang kita bisa buat link untuk menuju kehalaman
component post atau product

kita bisa menggunakan Link
kalian tinggal arahkan pathnya

nah ketika kalian membuat linknya 
maka tidak perlu menuliskan nya dari awal
/1/post

cukup kalian tuliskan post 
nama pathnya saja 

nanti dia akan secara otomatis urlnya berdasarkan parentnya
kalo kalian menuliskannya seperti ini 

/post

maka dia akan menuju ke page baru bukan dinestednya
tanda / hanya untuk pagenya saja ya 

nah sesimple itu cara kita membuat nested route
mudah mudahan kalian paham



*/
 
export default Detil;

