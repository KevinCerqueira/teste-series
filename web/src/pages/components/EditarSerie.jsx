import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../styles.css';

const EditarSerie = (params) => {
    const [formData, setFormData] = useState({...params});
    const history = useHistory();

    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.put(localStorage.getItem('@server/link') + "/series/update", { ...formData });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        return history.go(0);
    }
    
    return (
        <>
            <button key={params.idserie} type="submit" className="btn btn-block pt-4 pb-4 mt-1 card-border card-edit" data-toggle="modal" data-target={"#editarSerie" + params.idserie}>
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
            </button>

            <div id="novaserie">
                <div key={params.idserie} className="modal fade" id={"editarSerie" + params.idserie} tabIndex="-1" aria-labelledby={"editarSerie" + params.idserie + "Label"} aria-hidden="true">
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
                                            <input defaultValue={params.nomeserie} maxLength="100" minLength="1" required type="text" id="form-nome" name="nomeserie" onChange={handleInputChange} />
                                        </div>
                                        <div className="field-group">
                                            <div className="field">
                                                <label htmlFor="form-sinopse">Sinopse</label>
                                                <textarea defaultValue={params.sinopse} maxLength="500" minLength="4" required type="text" name="sinopse" id="form-sinopse" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row field-group">
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-anolancamento">Ano do lancamento</label>
                                                <input defaultValue={params.anolancamento} required type="number" maxLength="4" minLength="4" name="anolancamento" id="form-anolancamento" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-numtemporadas">Temporadas</label>
                                                <input defaultValue={params.numtemporadas} required type="number" minLength="1" name="numtemporadas" id="form-numtemporadas" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-categoria">Categoria</label>
                                                <input defaultValue={params.categoria} required type="text" maxLength="10" minLength="1" name="categoria" id="form-categoria" onChange={handleInputChange} />
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