import {useParams, Outlet,Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { useMemo } from 'react';


const Detil = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count),[count])


    const increment = () => {
        setCount((c) => c + 1);
      };



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

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };
    
      function expensiveCalculation (num){
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };



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
        <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
        {calculation}
        <Outlet/>



    </section> );


}


/* 


gunakan useMemo ketika kalian ingin menjalankan function
hanya ketika dibutuhkan saja

misalkan ketka saya klik tombol add todo 
seharusnya saya tidak perlu menjalankan function calculatingnya

nah kita harus tambahkan pada penaggilkan functionnya 
yaitu useMemu

dimana usememu memiliki 2 parameter yaitu
parameter pertama digunakan untuk menjalankan function yang kita buat
dan parameter kedua itu kapan kita jalakan

misalkan [count] pada saat ada perubahan state countnya
atau [] pada saat componentnya pertama kali dirender









*/


 
export default Detil;

