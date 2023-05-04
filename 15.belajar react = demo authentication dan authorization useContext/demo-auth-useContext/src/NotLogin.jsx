import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NotLogin = ({ children }) => {
  const [islogin, setIslogin] = useState(true);
  const redirect = useNavigate();

  useEffect(
    function () {
      axios
        .get("http://localhost:8080/user/islogin")
        .then(() => {
          redirect("/dashboard");
        })
        .catch((err) => {
          if (!err.response.status === 401) {
            console.log(err);
          }
          setIslogin(false);
        });
    },
    [redirect]
  );

  return islogin ? "" : children;
};

export default NotLogin;

/*

caranya mirip dengan PrivateRoute ya
bedanya kalo ada error kita set islogin menjadi false

yang artinya direturnnya kita render halaman childrennya yaitu component login
dan jika sudah login kita cukup redirect saja kehalaman dashboard

kita pergi ke main.jsx



*/
