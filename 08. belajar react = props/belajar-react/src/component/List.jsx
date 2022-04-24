const List = (props) => {
    /* 
    props ini adalah object yang isinya
    properti yang kalian kasih nama
    disini saya kasih nama getMahasiswa

    yang isinya data getMahasiswa
    tinggal kita pakai saja datanya
    
    
    
    */
    return ( 
        <section>
            <ul>
                {
                    props.getMahasiswa.map(value => (
                        <li key={value.id}>{value.nama}, {value.jurusan}</li>
                    ))
                }
            </ul>
        </section>
     );
}
 
export default List;