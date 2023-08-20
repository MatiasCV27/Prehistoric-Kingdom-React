import Navbar_Footer from "./Navbar_Footer"
import PeriodoCretacico from "../Componentes/PeriodoCretacico"

export default function Periodo_Cretacico() {
    return (
        <div>
            <Navbar_Footer />
            <div className="pt-5 mt-5"></div>
            <h1 className="text-white text-center"><strong><u><i>Especies del Periodo Cretácico</i></u></strong></h1>
            <div className="mt-5"></div>
            <PeriodoCretacico />
            <div className="pt-5 mt-5"></div>
        </div>
    );    
}