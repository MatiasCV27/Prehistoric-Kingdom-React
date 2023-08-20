import Navbar_Footer from "./Navbar_Footer"
import PeriodoJurasico from "../Componentes/PeriodoJurasico"

export default function Periodo_Jurasico() {
    return (
        <div>
            <Navbar_Footer />
            <div className="pt-5 mt-5"></div>
            <h1 className="text-white text-center"><strong><u><i>Especies del Periodo Jurásico</i></u></strong></h1>
            <div className="mt-5"></div>
            <PeriodoJurasico />
            <div className="pt-5 mt-5"></div>
        </div>
    );    
}