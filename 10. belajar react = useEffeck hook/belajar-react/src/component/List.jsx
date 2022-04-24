const List = (props) => {

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

 
export default List;