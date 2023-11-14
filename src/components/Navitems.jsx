import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import '../assets/css/icofont.min.css'
import DolarBlue from "./DolarBlue"





const Navitems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener("scroll", () => {
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false)
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
        <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to="" className='lab-btn me-3'><span>Crea tu cuenta</span></Link>
                    <Link to="">Inicia sesión</Link>
                </div>
            </div>
        </div>

            {/*header*/}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                        {/*logo*/}
                            <div className='logo-search-acte'>
                                <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="" />
                                </Link>
                        </div>
                    </div>

                            <div className='menu-area'>
                                <div className='menu'>
                                    <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>   
                                        <li><Link to="/">Inicio</Link></li>
                                        <li><Link to="/shop">Tienda</Link></li>
                                        <li><Link to="">ingresar</Link></li>
                                        <li><Link to="">Registrate</Link></li>
                                        <li><Link to="/cart-page" className='lab-btn me-4 d-none d-md-block'>Carrito <i class="icofont-shopping-cart"></i></Link></li>
                                    </ul>
                                </div>

                                
                                <DolarBlue/>

                                <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-user"></i>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Navitems