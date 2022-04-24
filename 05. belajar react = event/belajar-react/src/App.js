import logo from './logo.svg';
import './App.css';
import Header from './component/Header';

/*

misalnya saya membuat tombol untuk diclick

nah ketika kalian memiliki parameter didalam function
click maka harus dibungkus menggunakan anonymous function

kita gunakan arrow function pada saat kita melakukan intraksi
dengan evet agar simple 

*/

function App() {


  const click = (nama) => {
    document.querySelector('header h1').innerHTML = `Apa Kabar ${nama}`
  }



  return (
    <div className="App">
      <Header />
      <button onClick={() => click('Muiz')}>click</button>
    </div>
  );
}

export default App;

/*

nah begitu lah kita berinteraksi dengan event pada react
mudah mudahan kalian paham

*/