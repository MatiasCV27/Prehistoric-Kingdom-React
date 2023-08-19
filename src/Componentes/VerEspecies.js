import React,{useEffect, useState} from 'react';
import axios from 'axios';
import xmlJs from 'xml-js';
import swal from 'sweetalert';
import withReactContent from 'sweetalert2-react-content';
import { mostrarAlerta } from '../functions';

const VerEspecies = () => {

    const url = 'http://localhost:55232/api/Especie';
    const [especies,setEspecies] = useState([]);
    const [IdEspecie,setIdEspecie] = useState('');
    const [Nombre,setNombre] = useState('');
    const [Significado,setSignificado] = useState('');
    const [Dieta,setDieta] = useState('');
    const [Peso,setPeso] = useState('');
    const [Periodo,setPeriodo] = useState('');
    const [Hallazgo,setHallazgo] = useState('');
    const [Dimensiones,setDimensiones] = useState('');
    const [Descripcion,setDescripcion] = useState('');
    const [Tiempo,setTiempo] = useState('');
    const [Imagen,setImagen] = useState('');

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
                    <div className='col-md-4 mx-auto'>
                        <button className='btn btn-dark w-100' data-bs-toggle='modal' data-bs-target='#modalEspecies'>
                            <i className="bi bi-plus-circle-fill"></i> Añadir
                        </button>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-lg-12 offset-0 offset-lg-12 mx-auto'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th className='text-center'>#</th>
                                        <th className='text-center'>Nombre</th>
                                        <th className='text-center'>Significado</th>
                                        <th className='text-center'>Dieta</th>
                                        <th className='text-center'>Peso</th>
                                        <th className='text-center'>Periodo</th>
                                        <th className='text-center'>Hallazgo</th>
                                        <th className='text-center'>Dimensiones</th>
                                        <th className='text-center'>Descripción</th>
                                        <th className='text-center'>Tiempo</th>
                                        <th className='text-center'>Imagen</th>
                                    </tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {especies.map((especie, i) => (
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
                                            <td>
                                                <button className='btn btn-primary'>
                                                    <i className="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger'>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade"></div>
        </div>
    )
}

export default VerEspecies