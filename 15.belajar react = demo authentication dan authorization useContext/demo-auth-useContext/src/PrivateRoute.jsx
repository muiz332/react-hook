import { useEffect, useState, useContext } from "react";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { RootContext } from "./GlobalState";

const PrivateRoute = ({ children }) => {
  const [islogin, setIslogin] = useState(false);
  const { setUserGlobalState } = useContext(RootContext);
  const redirect = useNavigate();

  useEffect(
    function () {
      axios
        .get("http://localhost:8080/user/islogin")
        .then(({ data }) => {
          setIslogin(true);
          setUserGlobalState({
            username: data.data[0].username,
            email: data.data[0].email,
          });
        })
        .catch((err) => {
          if (!err.response.status === 401) {
            console.log(err);
          }
          redirect("/");
        });
    },
    [redirect, setUserGlobalState]
  );

  return islogin ? children : "";
};

PrivateRoute.propTypes = {
  children: propTypes.node.isRequired,
};

export default PrivateRoute;

/*

disini kita buat state dulu ya nama islogin, dengan default value false
dimana direturn nya kita check 

kalo false kita return string kosong kalo true kita return component yang kita batasi
yang kita kirimkan lewat children

jadi ketika pertama kali component PrivateRoute dirender maka dia akan merender
string kosong terlebih dahulu

barulah kita gunakan useEffect untuk mengecheck dibagian backend apakah
user telah login atau belum

kalo user sudah melakukan login kita ubah nilai dari islogin menjadi true
kalo belum login kita redirect

ketika ada perubahan distate islogin, maka sesuatu yang menggunakannya akan dirender ulang
dimana dalam kasus ini adalah pengkondisian yang ada direturnnya

ketika islogin menjadi true maka dia akan melakukan pengecheck direturnnya lagi
dan yang dirender adalah component childrennya yaitu dashboard

ketika kita check bahwa user sudah login
maka kita setUserGlobalState dengan data yang dikirimkan dari backend

yang nanti digunakan dihalaman dashboardnya

sekarang kita pergi halamanan main.jsx











*/
