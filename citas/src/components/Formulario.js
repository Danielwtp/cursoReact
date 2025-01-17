import React, { Fragment, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import PropTypes from 'prop-types';

const Formulario = ({crearCita}) => {
    //Crear state de citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    });
    const [error, actualizarError] = useState(false)

    //changeState
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //extaer datos
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    //al pulsar el boton
    const submitCita = e => {
        e.preventDefault();
        //Validacion
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }
        //borrar el mensaje de error
        actualizarError(false);

        //asignar id
        cita.id = uuidv4();

        //crear cita
        crearCita(cita);

        //restart form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}
            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    value={mascota}
                    onChange={handleChange}
                />

                <label>Nombre Dueño</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                
                <label>Fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />


                <label>Síntomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                ></textarea>
                
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Añadir Cita</button>
            </form>
        </Fragment> 
     );
}
 
Formulario.propTypes={
    crearCita: PropTypes.func.isRequired
}

export default Formulario;