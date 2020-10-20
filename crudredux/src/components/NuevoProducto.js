import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//actions de redux
import { crearNuevoProductoAction } from '../actions/productoActions';

const NuevoProducto = () => {

    //state
    const [nombre, guardarNombre ] = useState('');
    const [precio, guardarPrecio ] = useState(0);

//use dispach te crea una funcion
    const dispatch = useDispatch();

    //manda a llamar el action de productAction
    const añadirProducto = () => dispatch( crearNuevoProductoAction() );
    
    //cuando el user submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        //validar form
        //si no hay errores
        //crearnuevoproducto
        añadirProducto();
    }

    return ( 
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Producto</label>
                                <input  type="text"
                                        className="form-control"
                                        placeholder="Nombre Producto"
                                        name="nombre" />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input  type="number"
                                        className="form-control"
                                        placeholder="Precio Producto" 
                                        name="precio"/>
                            </div>
                            <button type="submit"
                                    className="btn btn-primary font-weight-bold text-upercase d-block w-100">
                                        Añadir
                                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;