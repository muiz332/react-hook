import { useContext } from "react";
import { RootContext } from "./GlobalState";

const Dashboard = () => {
  const { userGlobalState } = useContext(RootContext);

  return (
    <section>
      <h1>selamat datang {userGlobalState.username} </h1>
      <h1>email anda {userGlobalState.email}</h1>
    </section>
  );
};

export default Dashboard;

/*

disini tinggal kalian panggil saja userGlobalStatenya

yang berisi sebuah object dimana ada properti username dan email


dan ketika sudah login maka halaman login tidak boleh diakses lagi
maka dari itu kita buat component NotLogin untuk mengecheck 

jika belum login maka kita tampilkan halaman login dan jika sudah login 
maka kita redirect kehalaman dashboard

kita pergi ke component NotLogin

*/
