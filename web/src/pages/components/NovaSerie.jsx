import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import '../styles.css';

const NovaSerie = () => {
    const history = useHistory();

    const [formData, setFormData] = useState({
        nomeserie: '',
        anolancamento: 0,
        numtemporadas: 0,
        sinopse: '',
        categoria: '',
        status: 0,
    });
    function handleInputChange(event) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const res = await axios.post(localStorage.getItem('@server/link') + "/series/create", { ...formData });
            console.log(res);
        } catch (error) {
            console.log(error);
        }
        return history.go(0);
    }
    return (
        <div id="nova-serie">
            <div className="row">
                <div className="col-md-2 p-0 m-0 float-right">
                    <button id="btn-novaserie" type="button" className="btn border card-content" data-toggle="modal" data-target="#novaserieModal">
                        <strong>Adicionar Serie <i className="fas fa-plus-circle"></i></strong>
                    </button>
                </div>
            </div>
            <div id="novaserie">
                <div className="modal fade" id="novaserieModal" tabIndex="-1" aria-labelledby="novaserieModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <legend>
                                    <h2>Nova Série</h2>
                                </legend>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form id="form-novaserie" onSubmit={handleSubmit}>
                                <div className="modal-body">
                                    <fieldset>
                                        <div className="field">
                                            <label htmlFor="form-nome">Nome</label>
                                            <input maxLength="100" minLength="1" required type="text" id="form-nome" name="nomeserie" onChange={handleInputChange} />
                                        </div>
                                        <div className="field-group">
                                            <div className="field">
                                                <label htmlFor="form-sinopse">Sinopse</label>
                                                <textarea maxLength="500" minLength="4" required type="text" name="sinopse" id="form-sinopse" onChange={handleInputChange} />
                                            </div>
                                        </div>
                                        <div className="row field-group">
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-anolancamento">Ano do lancamento</label>
                                                <input required type="number" maxLength="4" minLength="4" name="anolancamento" id="form-anolancamento" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-numtemporadas">Temporadas</label>
                                                <input required type="number" minLength="1" name="numtemporadas" id="form-numtemporadas" onChange={handleInputChange} />
                                            </div>
                                            <div className="col-md-3 field m-0">
                                                <label htmlFor="form-categoria">Categoria</label>
                                                <input required type="text" maxLength="10" minLength="1" name="categoria" id="form-categoria" onChange={handleInputChange} />
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
                                    <button type="submit">Adicionar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}
export default NovaSerie;