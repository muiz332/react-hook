import { useContext } from "react";
import { RootContext } from "./Provider";
import { Link } from "react-router-dom";

const BtnCounter = () => {
  const { angka, setAngka } = useContext(RootContext);

  const increment = () => {
    setAngka(angka + 1);
  };

  return (
    <div>
      <Link to={"/"}>halaman tampil</Link>
      <button onClick={increment}>Tambah</button>;
    </div>
  );
};

export default BtnCounter;

/*


untuk mengubahnya tinggal kita pakai properti setAngka yang kita kirimkan ya
jangan lupa kita destructuring object bukan array 

tinggal ktia pakai saja setAngka untuk menambah nilainya

jadi bisanya createContext ini selain digunakan untuk mengirimkan data antar halaman
atau component dihalaman lain

kita bisa gunakan untuk proses authentication dan authorization
direact

jadi seperti itu ya apa itu createContext, useContext dan penggunaanya
mudah mudahan kalian paham























*/
