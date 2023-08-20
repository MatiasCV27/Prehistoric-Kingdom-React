import Navbar_Footer from "./Navbar_Footer"
import PeriodoTriasico from "../Componentes/PeriodoTriasico"

export default function Periodo_Triasico() {
    return (
        <div>
            <Navbar_Footer />
            <div className="pt-5 mt-5"></div>
            <h1 className="text-white text-center"><strong><u><i>Especies del Periodo Triásico</i></u></strong></h1>
            <div className="mt-5"></div>
            <PeriodoTriasico />
            <div className="pt-5 mt-5"></div>
        </div>
    );    
}