import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary jusify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/'} className='text-light'>React & Redux</Link>
                </h1>
            </div>
            <Link to="/productos/nuevo"
                className="btn btn-danger nuevp-post d-block d-md-inline-block">
                    Añadir productos &#43;
            </Link>
            
        </nav>
     );
}
 
export default Header;