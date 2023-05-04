import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import GlobalState from "./GlobalState";
import PrivateRoute from "./PrivateRoute";
import NotLogin from "./NotLogin";
import axios from "axios";
axios.defaults.withCredentials = true;

import Login from "./Login";
import Dashboard from "./Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <NotLogin>
            <Login />
          </NotLogin>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalState>
      <RouterProvider router={router} />
    </GlobalState>
  </React.StrictMode>
);

/*

nah kali ini kita akan buat authentication menggunakan struktur access token dan refresh token 
yang diatur dirfc 6749 

ketika kalian sudah membuat form login dan sudah berhasil login
kita buat component private route 

private route ini hanya digunakan untuk mengecheck apakah user yang mengakses halaman 
tersebut sudah login atau belum

dalam hal ini adalah halaman dashboard
kita pergi ke global state dulu


*/

/*

disini kita import saja component GlobalStatenya 
tinggal kita tempatkan untuk membungkus RouteProvidernya dari react router dom

maka userGlobalState akan bisa diakses diseluruh component kita
untuk cara aksesnya seperti dimateri kemarin

selanjutnya kita ingin membatasi akess user, yaitu hanya user yang sudah melakukan login
yang bisa mengakses halaman dashboard

kita pergi ke component PrivateRoute

*/

/*

dicomponent Route kita tambahkan component PrivateRoute, dan kita kirimkan childrennya
yaitu dashboard

sekarang kita pergi component dashboard


*/

/*

tinggal kita pakai saja component NotLogin dengan mengirimkan childrennya yaitu component 
login


jadi seperti itu lah cara sederhana untuk pemula yang ingin mambatasi hak akses diaplikasi kita
atau disebut dengan authorization

dan system login disebut dengan authentication


jika ada cara yang lebih baik maka gunakan lah, karena cara ini hanya hasil percobaan 
bagaimana saya membuat authorization secara sederhana

mudah mudahan dapat dipahami



*/
