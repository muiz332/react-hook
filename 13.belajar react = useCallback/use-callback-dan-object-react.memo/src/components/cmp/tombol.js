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