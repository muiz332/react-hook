import { createContext, useState } from "react";
import propTypes from "prop-types";

export const RootContext = createContext();

const GlobalState = ({ children }) => {
  const [userGlobalState, setUserGlobalState] = useState({});

  return (
    <RootContext.Provider value={{ userGlobalState, setUserGlobalState }}>
      {children}
    </RootContext.Provider>
  );
};

GlobalState.propTypes = {
  children: propTypes.node.isRequired,
};

export default GlobalState;

/*

component ini digunakan untuk sharing state secara global
dimana kita menggunakan create context untuk mengirimkan state secara global

kemudian kita buat state yang ingin kita kirimkan secara global
contoh saya ingin mengirimkan state user yang berisi informasi user 

seperti username dan email yang bisa diakses secara global 

dan kemudian saya mereturn component RootContext.Provider dengan props value
dimana value ini lah tempat dimana kita ingin mengirim state secara global

kita kirimkan userStateGlobal dan setUserGlobalState
dimana dia memiliki children component

children component ialah component yang ingin kita share userGlobalState
dimana itu adalah seluruh component yang kita miliki

lalu kita pergi ke main.jsx


















*/
