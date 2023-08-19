import {Link} from "react-router-dom"

export default function Navbar_Footer() {
    return (
      <div>
        <nav class="navbar-dark navDino fixed-top navbar-expand-lg">
            <div class="container d-flex justify-content-between">
              <a class="navbar-brand" href="">
                <img src="favicon.jpg" alt="" width="30" height="30" class="d-inline-block align-text-center">
                </img><strong className="navtitulo">Prehistoric Kingdom</strong>
              </a>
              <div class="align-text-center">
                <a class="form-label-lg aText">
                  <strong><Link to={"/"} class="aText"><i class="bi bi-house-door-fill"></i> Inicio</Link></strong>
                </a>
                <a class="form-label-lg aText">
                  <strong><Link to={"/Periodo-Triasico"} class="aText"><i class="fa-solid fa-crow"></i> Triásico</Link></strong>
                </a>
                <a class="form-label-lg aText">
                  <strong><Link to={"/Periodo-Jurasico"} class="aText"><i class="fa-solid fa-crow"></i> Jurásico</Link></strong>
                </a>
                <a class="form-label-lg aText">
                  <strong><Link to={"/Periodo-Cretacico"} class="aText"><i class="fa-solid fa-crow"></i> Cretácico</Link></strong>
                </a>
                <a class="form-label-lg aText">
                  <strong><Link to={"/Mantenimiento"} class="aText"><i class="bi bi-bookmark-plus-fill"></i> Mantenimiento</Link></strong>
                </a>
                <a class="form-label-lg aText">
                  <strong><Link to={"/Contacto"} class="aText"><i class="bi bi-person-circle"></i> Contacto</Link></strong>
                </a>
              </div>
            </div>
        </nav>
        <footer class="footDino text-white fixed-bottom">
            <div class="container">
              <div class="row">
                <div class="col-lg-6 col-sm-12">
                    <p class="text-center textfoot">Derechos Reservados &copy; Matias Criollo Vigo <strong>2023</strong></p>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <p class="text-center textfoot">Redes Sociales:
                        <a href="https://www.facebook.com" class="footicon" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://web.whatsapp.com" class="footicon" target="_blank"><i class="bi bi-whatsapp"></i></a>
                        <a href="https://www.youtube.com" class="footicon" target="_blank"><i class="bi bi-youtube"></i></a>
                        <a href="https://twitter.com/MatiasCV27" class="footicon" target="_blank"><i class="bi bi-twitter"></i></a>
                        <a href="https://www.instragram.com" class="footicon" target="_blank"><i class="bi bi-instagram"></i></a>
                    </p>
                </div>
              </div>
            </div>
        </footer>    
      </div>
    );    
}