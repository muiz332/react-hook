import { useContext } from "react";
import { RootContext } from "./Provider";
import { Link } from "react-router-dom";

const ShowCounter = () => {
  const { angka } = useContext(RootContext);

  return (
    <div>
      <Link to={"/btn"}>halaman tambah</Link>
      <h1>{angka}</h1>
    </div>
  );
};

export default ShowCounter;

/*

nah disini kalian hanya import saja useContext
dan variable RootContext

dimana useContext ini digunakan untuk mengakses context yang kita buat
tinggal kita masukkan saja nih context yang kita buat

yaitu variable RootContext

dan kita destructuring objectnya yaitu si properti angka
tinggal kita gunakan saja properti angka ini 

jadi kalo misalkan usestate angka saya ubah nilai defaultnya 
maka h1nya akan ikut berubah juga

jadi kita sudah berhasil menggunakan state secara global dengan createContext
lalu bagaiman kita mengubah nilainya ?

kita pergi component BtnCounter.jsx





























*/
