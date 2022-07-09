import { memo } from "react";

const Forgot = ({inc}) => {
    console.log('oke')
    return ( 
        <section>
            <h1>lupa password? </h1>
            <button onClick={inc}>tambah</button>
        </section>
     );
}
 
export default memo(Forgot, (prev,next) => {
    return prev.value === next.value
});

/*

nah kita bisa check objectnya dengan mengambil valuenya
jadi ketika valuenya itu sama dengan value sebelumnya maka tidak
perlu dirender ulang componentnya

nah ini akan membuat website kita semakin cepat
jadi jadi begitu kira kira penggunaan dari useCallback

mudah mudahan kalian paham


*/