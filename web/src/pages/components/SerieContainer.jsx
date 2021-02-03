import React from 'react';
import axios from 'axios';
import EditarSerie from './EditarSerie'
import '../styles.css'
const SerieContainer = (params) => {
    const { serie, status } = params;

    async function updateStatus(event) {
        event.preventDefault();
        const idserie = event.target.children[0].value;
        const status = event.target.children[1].value;
        await axios.patch(localStorage.getItem('@server/link') + "/series/update-status", { idserie, status });
    }

    async function deleteSerie(event) {
        event.preventDefault();
        const idserie = event.target.children[0].value;
        await axios.delete(localStorage.getItem('@server/link') + "/series/delete", { data: { idserie } });
    }

    return (
        <div key={serie.idserie} className="bg-white card-content row mt-3 sup-center shadow p-2">
            <div className="col-md-8 pb-0 pt-0 pl-1 pr-1">
                <p className="h4 mb-1 p-2"><strong>{serie.nomeserie}</strong></p>
                <span className="mr-3 p-1 sinopse">Sinopse: {serie.sinopse}</span>
                <p className="h5 p-1">
                    {serie.anolancamento} | {serie.categoria} | {serie.numtemporadas} temporadas
                </p>
            </div>
            <div className="col-md-2 p-1">
                {
                    status.map((state) => (
                        <div key={state.idstatus}>
                            <form id="form-status" onSubmit={updateStatus}>
                                <input type="hidden" name="idserie" value={serie.idserie} />
                                {
                                    serie.status === state.idstatus ?
                                        <div className="status text-center color-selected card-border pt-4 pb-4 mb-2 mt-2">
                                            <span className="mb-0 text-uppercase font-weight-light">
                                                <strong>{state.descricao}</strong>
                                            </span>
                                        </div> :
                                        <>
                                            <input type="hidden" name="status" value={state.idstatus} />
                                            <button type="submit" className="status btn-block btn card-border bg-white border pt-4 pb-4 mt-2 mb-2">
                                                <span className="text-uppercase font-weight-light">
                                                    <strong>{state.descricao}</strong>
                                                </span>
                                            </button>
                                        </>
                                }
                            </form>
                        </div>
                    ))
                }
            </div>
            <div className="col-md-2">
                <form id="form-delete" onSubmit={deleteSerie}>
                    <input type="hidden" name="idserie" value={serie.idserie} />
                    <div className="row">
                        <button type="submit" className="btn btn-block pt-4 pb-4 mb-1 card-border card-delete">
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </form>
                <div className="row">
                    <EditarSerie {...serie} />
                </div>
            </div>
        </div>
    )
}
export default SerieContainer;