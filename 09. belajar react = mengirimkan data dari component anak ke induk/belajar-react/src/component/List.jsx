const List = (props) => {

    /* 
    
    nah misalnya saya ingin ketika diklik dataya hilang
    nah datanya itu ada dicomponent induk
    sedangkan tombolnya itu ada dicomponet anak

    jadi kita harus kirimkan data id dari tombol tersebut 
    ke component induk

    ketika diklik jalankan function untuk menghapus datanya
    nah functionnya itu kita buat dicomponent indux

    dimana function tersebut kita kirimkan kecomponent anak
    menggunakan props

    kita gunakan anonymous function karena
    kita membutuhkan parameternya
    
    */
    return ( 
        <section>
            <ul>
                {
                    props.getMahasiswa.map(value => (
                        <li key={value.id}>{value.nama}, {value.jurusan}
                        <button onClick={() => props.deleteMahasiswa(value.id)} >Delete</button>
                        </li>
                    ))
                }
            </ul>

        </section>
     );
}

/* 

jadi ketika diklik dia akan menjalankan function
yang ada didalam component induk


*/
 
export default List;