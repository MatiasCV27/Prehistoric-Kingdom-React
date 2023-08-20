import React,{useEffect, useState} from 'react';
import axios from 'axios';

const PeriodoCretacico = () => {

    const url = 'http://localhost:55232/api/Especie';
    const [especies,setEspecies] = useState([]);

    useEffect( ()=> {
        getEspecies();
    },[]);

    const getEspecies = async () => {
        const respuesta = await axios.get(url);
        setEspecies(respuesta.data);
    }

    return (
        <div className='App'>
            <div className="container-fluid">
                <div className='row mt-3'>
                {
                  especies
                    .filter(especie => especie.Periodo === 'Cretácico') 
                    .map((especie, i) => (
                    <tr key={especie.IdEspecie}>
                        <td>{i + 1}</td>
                        <td>{especie.Nombre}</td>
                        <td>{especie.Significado}</td>
                        <td>{especie.Dieta}</td>
                        <td>{especie.Peso}</td>
                        <td>{especie.Periodo}</td>
                        <td>{especie.Hallazgo}</td>
                        <td>{especie.Dimensiones}</td>
                        <td>{especie.Descripcion}</td>
                        <td>{especie.Tiempo}</td>
                        <td><img src={especie.Imagen} width='50px' alt={`Imagen de ${especie.Nombre}`} /></td>
                    </tr>
                    ))
                }
                </div>
            </div>
            <div className="modal fade"></div>
        </div>
    )
}

export default PeriodoCretacico