import Navbar_Footer from "./Navbar_Footer"

export default function Contacto() {
    return (
        <div>
            <Navbar_Footer />
            <div className="pt-5 mt-5"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="imgContacto">
                            <div className="overlayContacto"></div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="login-box">
                          <h4 className="text-white text-center" style={{ padding: ".75em 0" }}>
                            <u>Contactanos para más información</u>
                          </h4>
                          <form>
                            <div className="user-box">
                              <input type="text" name="user" required="" />
                              <label>Nombre Completo:</label>
                            </div>
                            <div className="user-box">
                              <input type="text" name="" required=""/>
                              <label>Correo Electrónico:</label>
                            </div>
                            <div className="user-box">
                              <input type="text" name="" required=""/>
                              <label>Teléfono:</label>
                            </div>
                            <div className="user-box">
                              <input type="text" name="" required=""/>
                              <label>Consulta:</label>
                            </div>
                            <center>
                              <a id="EnviarB"><strong>Enviar</strong><span></span></a>
                            </center>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-5 mt-5"></div>
        </div>
    );    
}