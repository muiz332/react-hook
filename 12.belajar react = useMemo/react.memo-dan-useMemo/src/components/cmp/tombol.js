import { memo } from "react";
import { useRef } from "react";


const Tombol = () => {
    const render = useRef(0)
    console.log('render', render.current++)
    return ( 
        <button>+</button>
     );
}
 
export default memo(Tombol);
// export default Tombol;

/*

nah disini kita buat component tombol misalnya 
untuk mengecheck berapa kali component itu dirender kita bisa menggunakan
useref

kita pergi kehalaman home

*/


/*

cara mengatasinya tinggal kita kasih fungsi memo yang memiliki
parameter componentnya pada saat akan diexport

maka component akan dirender ulang ketika ada perubahan pada propsnya
jadi itu lah penggunaan dari react.memu 

nah sekarang kita pergi kehalaman detil



*/