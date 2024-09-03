import React from 'react';
import { formatNumber } from '../../assets/js/utils';

const Navbar = () => {   
    const total = 25000; // Al cambiar el monto se cambia en forma automatica en el HTML
    const token = 123; // Si el token no es correcto, se cambian los botones
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" className="btn btn-dark"><i className="fa-solid fa-pizza-slice"></i> Home</button>
                            </li>
                            {token == 1234 ? (
                                <>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-user"></i> Profile</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-lock"></i> Logout</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-key"></i> Login</button>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-dark"><i className="fa-solid fa-lock"></i> Register</button>
                                    </li>
                                </>
                            )}
                        </ul>
                        <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-cart-shopping"></i> Total: $ {formatNumber(total)}</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;