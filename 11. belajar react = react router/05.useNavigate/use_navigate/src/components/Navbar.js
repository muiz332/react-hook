import {Link} from 'react-router-dom'

// jangan lupa kita import dulu ya Linknya

const Navbar = () => {
    return ( 
        <nav>
        <h1>menu</h1>
        <Link to="/" >Home</Link>
        <Link to="/login">Login</Link>
      </nav>
     );
}
 
export default Navbar;