import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    state = {
        pais : "",
        categoria : "" 
    }

    actualizarState = e => {
        // si hay un cambio en el formulario, actualizar state con los nuevos datos.
        // if there is a change in the form, update state with the new data.
        this.setState({
            [e.target.name] : e.target.value
        }, () => {
            // mediante un callback desde props, consultar api por cada cambio del state.
            // through a Callback from props, request api for each change from state
            this.props.consultarApi(this.state.pais, this.state.categoria);
        })
    }

    render() {
        return (
            <form>
            <div className="form-row">
                <div className="col">
                    <select 
                        className="custom-select font-weight-bold"
                        onChange={this.actualizarState}
                        name="categoria"    
                    >
                        <option>Tipos de noticias:</option>
                        <option value="business">Negocios</option>
                        <option value="entertainment">Entretenimiento</option>
                        <option value="sports">Deportes</option>
                        <option value="health">Salud</option>
                        <option value="science">Ciencia</option>
                        <option value="technology">Tecnologia</option>
                        <option value="general">General</option>
                    </select>
                </div>
                <div className="col">
                    <select 
                        className="custom-select font-weight-bold"
                        onChange={this.actualizarState}
                        name="pais"
                    >
                        <option>De:</option>
                        <option value="us">Estados Unidos</option>
                        <option value="ve">Venezuela</option>
                        <option value="mx">México</option>
                    </select>
                </div>
            </div>
            </form>
        );
    }
}
// descripbir tipo de Props
// describe props types
Form.propTypes = {
    consultarApi : PropTypes.func.isRequired
}
export default Form;