import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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

    const [Operacion,setOperacion] = useState(1);
    const [Title,setTitle] = useState(1);


    useEffect( ()=> {
        getEspecies();
    },[]);

    const getEspecies = async () => {
        const respuesta = await axios.get(url);
        setEspecies(respuesta.data);
    }

    const openModal = (op, IdEspecie, Nombre, Significado, Dieta, Peso, Periodo, Hallazgo, Dimensiones, Descripcion, Tiempo, Imagen) => {
        setIdEspecie('');
        setNombre('');
        setSignificado('');
        setDieta('');
        setPeso('');
        setPeriodo('');
        setHallazgo('');
        setDimensiones('');
        setDescripcion('');
        setTiempo('');
        setImagen('');
        setOperacion(op);
        if (op == 1) {
            setTitle('Registrar Nueva Especie')
        } else if (op ==  2) {
            setTitle('Modificar Especie')
            setIdEspecie(IdEspecie);
            setNombre(Nombre);
            setSignificado(Significado);
            setDieta(Dieta);
            setPeso(Peso);
            setPeriodo(Periodo);
            setHallazgo(Hallazgo);
            setDimensiones(Dimensiones);
            setDescripcion(Descripcion);
            setTiempo(Tiempo);
            setImagen(Imagen);
        }  
        window.setTimeout(function(){
            document.getElementById('Nombre').focus();
        },500);
    }

    const validar = () => {
        var parametros;
        var metodo;
        if (Nombre.trim() === '') {
            mostrarAlerta('Escribe el nombre de la especie', 'warning');
        } else if (Significado.trim() === '') {
            mostrarAlerta('Escribe el significado de la especie', 'warning');
        } else if (Dieta.trim() === '') {
            mostrarAlerta('Escribe la dieta de la especie', 'warning');
        } else if (Peso.trim() === '') {
            mostrarAlerta('Escribe el peso de la especie', 'warning');
        } else if (Periodo.trim() === '') {
            mostrarAlerta('Escribe el periodo de la especie', 'warning');
        } else if (Hallazgo.trim() === '') {
            mostrarAlerta('Escribe el hallazgo de la especie', 'warning');
        } else if (Dimensiones.trim() === '') {
            mostrarAlerta('Escribe las dimensiones de la especie', 'warning');
        } else if (Descripcion.trim() === '') {
            mostrarAlerta('Escribe la descripción de la especie', 'warning');
        } else if (Tiempo.trim() === '') {
            mostrarAlerta('Escribe el tiempo de la especie', 'warning');
        } else if (Imagen.trim() === '') {
            mostrarAlerta('Escribe la URL de la imagen de la especie', 'warning');
        } else {
            if (Operacion === 1) {
                parametros = {Nombre:Nombre.trim(), Significado:Significado.trim(), Dieta:Dieta.trim(), Peso:Peso.trim(), Periodo:Periodo.trim(), Hallazgo:Hallazgo.trim(), Dimensiones:Dimensiones.trim(), Descripcion:Descripcion.trim(), Tiempo:Tiempo.trim(), Imagen:Imagen.trim()};
                metodo = 'POST';
            } else {
                parametros = {Nombre:Nombre.trim(), Significado:Significado.trim(), Dieta:Dieta.trim(), Peso:Peso.trim(), Periodo:Periodo.trim(), Hallazgo:Hallazgo.trim(), Dimensiones:Dimensiones.trim(), Descripcion:Descripcion.trim(), Tiempo:Tiempo.trim(), Imagen:Imagen.trim()};
                metodo = 'PUT';
            }
            enviarSolicitud(metodo, parametros);
        }
    }

    const enviarSolicitud = async(metodo, parametros) => {
        await axios({ method:metodo, url:url, data:parametros}).then(function(respuesta){
            var tipo = respuesta.data[0];
            var msj = respuesta.data[1];
            mostrarAlerta(msj,tipo);
            if (tipo === 'success') {
                document.getElementById('btnCerrar').click();
                getEspecies();
            }
        })
        .catch(function(error){
            mostrarAlerta('Error en la solicitud', 'error');
            console.log(error);
        }); 
    }

    const eliminarEspecie = (IdEspecie, Nombre) => {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: '¿Seguro que quieres eliminar a la especie '+ Nombre +'?',
            icon: 'question',text:'No se podrá dar revertir la eliminación',
            showCancelButton:true,confirmButtonText: 'Si, eliminar', cancelButtonText:'Cancelar' 
        }).then((result) => {
            if(result.isConfirmed) {
                setIdEspecie(IdEspecie);
                enviarSolicitud('DELETE',{IdEspecie:IdEspecie});
            } else {
                mostrarAlerta('La especie NO fue eliminada', 'info');
            }
        })
    }
 
    return (
        <div className='App'>
            <div className="container-fluid">
                <div className='row mt-3'>
                    <div className='col-md-4 mx-auto'>
                        <button onClick={() => openModal(1)} className='btn btn-dark w-100' data-bs-toggle='modal' data-bs-target='#modalEspecies'>
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
                                                <button onClick={() => openModal(2, 
                                                    especie.IdEspecie, especie.Nombre, especie.Significado, especie.Dieta,
                                                    especie.Peso, especie.Periodo, especie.Hallazgo, especie.Dimensiones,
                                                    especie.Descripcion, especie.Tiempo, especie.Imagen)} className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modalEspecies'>
                                                    <i className="bi bi-pencil-fill"></i>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => eliminarEspecie(especie.IdEspecie, especie.Nombre)} className='btn btn-danger'>
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
            <div id='modalEspecies' className="modal fade" aria-hidde='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <label className='h3 mx-auto'>{Title}</label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>
                        <div className='modal-body pt-0'>
                            <input type='hidden' id='IdEspecie'></input>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Nombre' className='form-control' placeholder='Nombre' value={Nombre} onChange={(e)=> setNombre(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Significado' className='form-control' placeholder='Significado' value={Significado} onChange={(e)=> setSignificado(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Dieta' className='form-control' placeholder='Dieta' value={Dieta} onChange={(e)=> setDieta(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Peso' className='form-control' placeholder='Peso' value={Peso} onChange={(e)=> setPeso(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Periodo' className='form-control' placeholder='Periodo' value={Periodo} onChange={(e)=> setPeriodo(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Hallazgo' className='form-control' placeholder='Hallazgo' value={Hallazgo} onChange={(e)=> setHallazgo(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Dimensiones' className='form-control' placeholder='Dimensiones' value={Dimensiones} onChange={(e)=> setDimensiones(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Descripcion' className='form-control' placeholder='Descripción' value={Descripcion} onChange={(e)=> setDescripcion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Tiempo' className='form-control' placeholder='Tiempo' value={Tiempo} onChange={(e)=> setTiempo(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i class="bi bi-check-lg"></i></span>
                                <input type='text' id='Imagen' className='form-control' placeholder='Imagen (URL)' value={Imagen} onChange={(e)=> setImagen(e.target.value)}></input>
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i class="bi bi-folder-symlink-fill"></i>Guardar
                                </button>
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' id='btnCerrar' className='btn btn-secondary' data-bs-dismiss='modal'>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerEspecies