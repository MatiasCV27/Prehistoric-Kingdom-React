import React,{useEffect, useState} from 'react';
import axios from 'axios';

const PeriodoTriasico = () => {

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
            <div className="container">
                <div className='row mt-3'>
                {
                  especies
                    .filter(especie => especie.Periodo === 'Triásico') 
                    .map((especie, i) => (
                    <div key={especie.IdEspecie} className='col-lg-4 col-md-6 col-sm-12 mx-auto mb-5'>
                        <div class="cardMostrar">
                          <div class="content">
                            <div class="back">
                              <div class="back-content">
                                <img src={especie.Imagen} className='imgPEspecie'/>
                              </div>
                            </div>
                            <div class="front">
                              <div class="img">
                                <div class="circle">
                                </div>
                                <div class="circle" id="right">
                                </div>
                                <div class="circle" id="bottom">
                                </div>
                              </div>
                              <div class="front-content contEspecie">
                                <div class="description">
                                  <div class="">
                                    <p class="text-center">
                                      <strong>{especie.Nombre}</strong> <br></br>
                                      <i>{especie.Significado}</i>
                                    </p>
                                  </div>
                                  <div class="textoCard"><strong>Descripción: </strong><p>{especie.Descripcion}</p></div>
                                  <div className='row'>
                                    <div class="textoCard col-6 text-center"><strong>Dieta: </strong><p>{especie.Dieta}</p></div>
                                    <div class="textoCard col-6 text-center"><strong>Hallazgo: </strong><p>{especie.Hallazgo}</p></div>
                                  </div>
                                  <div className='row'>
                                    <div class="textoCard col-6 text-center"><strong>Dimensiones: </strong><p>{especie.Dimensiones}</p></div>
                                    <div class="textoCard col-6 text-center"><strong>Tiempo: </strong><p>{especie.Tiempo}</p></div>
                                  </div>
                                  <div className='row mx-auto'>
                                    <div class="textoCard col-12 text-center"><strong>peso: </strong><p>{especie.Peso}</p></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div> 
                    ))
                }
                </div>
            </div>
            <div className="modal fade"></div>
        </div>
    )
}

export default PeriodoTriasico