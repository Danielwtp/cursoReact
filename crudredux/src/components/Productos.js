import React, {Fragment} from 'react';

const Productos = () => {
    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado Productos</h2>
            
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
            </table>
            <tbody>

            </tbody>
        </Fragment>
     );
}
 
export default Productos;