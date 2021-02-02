import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles.css';
import NovaSerie from '../components/NovaSerie';
import SerieContainer from '../components/SerieContainer';

const Home = () => {
    const [series, setSeries] = useState([]);
    const [status, setStatus] = useState([]);

    useEffect(() => {
        async function getSeries() {
            try {
                // localStorage.removeItem('@data/update');
                if ( localStorage.getItem('@data/update') === null || localStorage.getItem('@data/update') === true) {
                    const { data } = await axios.get(localStorage.getItem('@server/link') + "/series/");
                    setSeries(data);
                    localStorage.setItem('@data/update', false);
                }
                console.log(localStorage.getItem('@data/update'));
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
                    <SerieContainer key={serie.idserie} serie={serie} status={status} />
                ))}
            </div>
        </div>
    );
};

export default Home;