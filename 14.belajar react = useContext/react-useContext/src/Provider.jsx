import { createContext, useState } from "react";
import PropTypes from "prop-types";

// membuat context
export const RootContext = createContext();

const Provider = (props) => {
  const [angka, setAngka] = useState(0);

  return (
    <RootContext.Provider value={{ angka, setAngka }}>
      {props.children}
    </RootContext.Provider>
  );
};

// hanya definisikan type dari props children
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

/*

nah sekarang kita buat contextnya, caranya kalian tinggal import createContext dari react
lalu gunakan createContext diluar component Providernya

dan kita export context yang kita buat agar bisa diakses secara global
nah selanjutnya kita buat component provider karena kita ingin mengirimkan nilai 
dalam bentuk state

kita buat state angka, lalu kemudian kita buat Providernya dari variable RootContext
agar nilai dari statenya bisa diakses dichilren component RootContext.Provider

kemudian kita buat props value, props value inilah yang kita gunakan untuk mengirim kesemua
component yang ada didalam RootContext.Provider

lalu component children apa saja yang ada didalam RootContext.Provider
kita pergi file main.jsx





























*/
