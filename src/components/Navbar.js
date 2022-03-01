import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
      <nav className="nav-wrapper blue darken-2">
         <div className="container">
            <Link to="#"className="brand-log">Poke'Times</Link>  
            <ul className="right" >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>

            </ul>   
            </div> 
      </nav>  
     );
}
 
export default Navbar;