import { Link } from "react-router-dom"
import CartWidget from "../CartWidget";
import NavBar from "../NavBar/NavBar"
//import './App.css'

const Header = () =>{

    return(
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    {/* <!-- Logo --> */}
                    <div className="col-lg-3 col-xs-10">
                        <Link to="/"><img className="imgLogo" src="./src/assets/images/logoSinFondo.png" alt="Logo Pattas Petshop"/></Link>
                    </div>
                    {/* <!-- NavBar --> */}
                    <div className="col-lg-9 col-xs-2 paddingRL">
                        {/* <nav class="navbar navbar-expand-lg navbar-light ">
                            <a class="navbar-brand" href="#"></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="assets/pages/productos.html">Productos</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="assets/pages/contacto.html">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </nav> */}
                        <NavBar />
                    </div>
                    <Link to="/carrito" ><CartWidget/></Link>
                </div>
            </div>
        </div>
    )

}

export default Header;