import {Link} from "react-router-dom"

export default function Navbar_Footer() {
    return (
      <div>
        <nav className="navbar-dark navDino fixed-top navbar-expand-lg">
            <div className="container d-flex justify-content-between">
              <a className="navbar-brand" href="">
                <strong className="navtitulo"><i class="bi bi-lightning-fill"></i>Prehistoric Kingdom<i class="bi bi-lightning-fill"></i></strong>
              </a>
              <div className="align-text-center">
                <a className="form-label-lg aText">
                  <strong><Link to={"/"} className="aText"><i className="bi bi-house-door-fill"></i> Inicio</Link></strong>
                </a>
                <a className="form-label-lg aText">
                  <strong><Link to={"/Periodo-Triasico"} className="aText"><i className="fa-solid fa-crow"></i> Triásico</Link></strong>
                </a>
                <a className="form-label-lg aText">
                  <strong><Link to={"/Periodo-Jurasico"} className="aText"><i className="fa-solid fa-crow"></i> Jurásico</Link></strong>
                </a>
                <a className="form-label-lg aText">
                  <strong><Link to={"/Periodo-Cretacico"} className="aText"><i className="fa-solid fa-crow"></i> Cretácico</Link></strong>
                </a>
                <a className="form-label-lg aText">
                  <strong><Link to={"/Mantenimiento"} className="aText"><i className="bi bi-bookmark-plus-fill"></i> Mantenimiento</Link></strong>
                </a>
                <a className="form-label-lg aText">
                  <strong><Link to={"/Contacto"} className="aText"><i className="bi bi-person-circle"></i> Contacto</Link></strong>
                </a>
              </div>
            </div>
        </nav>
        <footer className="footDino text-white fixed-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <p className="text-center textfoot">Derechos Reservados &copy; Matias Criollo Vigo <strong>2023</strong></p>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <p className="text-center textfoot">Redes Sociales:
                        <a href="https://www.facebook.com" className="footicon" target="_blank"><i className="bi bi-facebook"></i></a>
                        <a href="https://web.whatsapp.com" className="footicon" target="_blank"><i className="bi bi-whatsapp"></i></a>
                        <a href="https://www.youtube.com" className="footicon" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a href="https://twitter.com/MatiasCV27" className="footicon" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a href="https://www.instragram.com" className="footicon" target="_blank"><i className="bi bi-instagram"></i></a>
                    </p>
                </div>
              </div>
            </div>
        </footer>    
      </div>
    );    
}