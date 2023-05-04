import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ShowCounter from "./ShowCounter";
import BtnCounter from "./BtnCounter";
import Provider from "./Provider";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<ShowCounter />} />
      <Route path="/btn" element={<BtnCounter />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

/*

nah disini kita defisinikan routenya dulu ya, dimana hanya ada route showCounter dan BtnCounter
setelah kita defisinikan Routenya menggunakan react router dom versi 6

kita impor Providernya agar kita bisa mengirimkan component children didalamnya
tinggal kita kirimkan saja RouterProvidernya dari react router dom

dimana RouterProvider itu didalamnya terdapat semua component, termasuk component sebagai halamannya
kita sudah menggunakan Providernya 

lalu bagaimana jika kita ingin menggunakan state global yang dikirimkan dari createContext yang
kita buat ?

kita pergi kehalaman showCounter

















*/
