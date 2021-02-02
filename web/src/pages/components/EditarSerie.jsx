import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';
import '../styles.css'
import SerieContainer from './SerieContainer';
const EditarSerie = (params) => {
    const [formData, setFormData] = useState({
        idserie: 0,
        nomeserie: '',
        anolancamento: 0,
        numtemporadas: 0,
        sinopse: '',
        categoria: '',
        status: 0,
    });
    // const { idserie, nomeserie, anolancamento, numtemporadas, sinopse, categoria, status } = params;
    const { idserie } = params;
    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        const { nomeserie, anolancamento, numtemporadas, sinopse, categoria, status } = formData;
        const data = {
            idserie,
            nomeserie,
            anolancamento,
            numtemporadas,
            sinopse,
            categoria,
            status
        };
        const res = await axios.put(localStorage.getItem('@server/link') + "/series/update", data);
        console.log(res);
        return window.location.reload();
    }
    return (
        <>
            <button key={params.idserie} type="submit" className="btn btn-block pt-4 pb-4 mt-1 card-border card-edit" data-toggle="modal" data-target="#editarSerie">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>

            <div id="novaserie">
                <div key={params.idserie} className="modal fade" id="editarSerie" tabIndex="-1" aria-labelledby="editarSerieLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <legend>
                                    <h2>Editar Série</h2>
                                </legend>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="form-novaserie" onSubmit={handleSubmit}>
                                <input type="hidden" name="idserie" value={params.idserie} />
                                <div className="modal-body">
                                    <fieldset>
                                        <div className="field">
                                            <label htmlFor="form-nome">Nome</label>
                                            <input value={params.nomeserie} maxLength="100" minLength="1" required type="text" id="form-nome" name="nomeserie" onChange={handleInputChange} />
                                        </div>
                                        <div className="field-group">
                                            <div className="field">
                                                <label htmlFor="form-sinopse">Sinopse</label>
                                                <textarea value={params.sinopse} maxLength="500" minLength="4" required type="text" name="sinopse" id="form-sinopse" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row field-group">
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-anolancamento">Ano do lancamento</label>
                                                <input value={params.anolancamento} required type="number" maxLength="4" minLength="4" name="anolancamento" id="form-anolancamento" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-numtemporadas">Temporadas</label>
                                                <input value={params.numtemporadas} required type="number" minLength="1" name="numtemporadas" id="form-numtemporadas" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-categoria">Categoria</label>
                                                <input value={params.categoria} required type="text" maxLength="10" minLength="1" name="categoria" id="form-categoria" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-status">Status</label>
                                                <select required id="form-status" name="status" onChange={handleInputChange}>
                                                    <option></option>
                                                    <option value="1">Já vi</option>
                                                    <option value="2">Quero ver</option>
                                                </select>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit">Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
export default EditarSerie;