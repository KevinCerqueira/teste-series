import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';
import NovaSerie from '../components/NovaSerie';

const Home = () => {
    const [series, setSeries] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        async function getSeries() {
            try {
                const { data } = await axios.get(localStorage.getItem('@server/link') + "/series/");
                setSeries(data);
            } catch (error) {
                console.log(error);
            }
        }
        getSeries();
    });
    useEffect(() => {
        async function getStatus() {
            try {
                const { data } = await axios.get(localStorage.getItem('@server/link') + "/status");
                setStatus(data);
            } catch (error) {
                console.log(error);
            }
        }
        getStatus();
    });



    return (
        <div id="navbar">
            <nav className="p-2 text-center shadow">
                <span className="mb-0 h2 text-white text-center">
                    Minhas Series
                </span>
            </nav>
            <div className="container-fluid">
                <NovaSerie />
                {series.map((serie) => (
                    <div key={serie.idserie} className="bg-white card-content row mt-3 sup-center">
                        <div className="etiqueta"><strong>SERIE</strong></div>
                        <div className="col-md-7 pb-0 pt-0 pl-1 pr-1">
                            <p className="h4 mb-1 nome-serie"><strong>{serie.nome}</strong></p>
                            <span className="mr-3 p-1 sinopse">{serie.sinopse}</span>
                            <span className="ml-3 p-1 anolancamento">{serie.anolancamento}</span>
                            {/* <p className="h5 mb-1"><strong>{serie.logradouro}</strong></p> */}
                        </div>
                        <div className="col-md-2 p-1">
                            {
                                status.map((state) => (
                                    <div key={state.idstatus}>
                                        {
                                            serie.status === state.idstatus ?
                                                <div className="status text-center p-1 color-selected mb-1 mt-1">
                                                    <p className="mb-0 text-uppercase font-weight-light">
                                                        <strong>{state.descricao}</strong>
                                                    </p>
                                                </div> :
                                                <div className="status text-center p-1 bg-white border mb-1 mt-1">
                                                    <p className="mb-0 text-uppercase font-weight-light">
                                                        <strong>{state.descricao}</strong>
                                                    </p>
                                                </div>
                                        }
                                    </div>
                                ))
                            }
                        </div>
                        {/* <div className="col-md-2 text-center p-2 sup-center">
                            <div className="card-whatsapp p-3">
                                <i className="fab fa-whatsapp mr-2"></i>
                            WhatsApp
                            <p className="h5 mb-0">{serie.whatsapp}</p>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;