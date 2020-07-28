import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Actions redux
import { crearNuevoProductoAction } from '../actions/productoActions'

   

const NuevoProducto = () => {

    // utilizar use dispatch y te crea una funcion
                        // Siempre que venga algo del action utilizar dispatch
    const dispatch = useDispatch();

    // mandar a llamar a funcion action 
    const agregarProducto = () => dispatch(crearNuevoProductoAction())

     //Cuando el usuario haga submit
     const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar formulario

        // si no hay errores

        // crear nuevo producto
        agregarProducto()
    }



    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>
                        <form
                        
                        onSubmit={ submitNuevoProducto }

                        >
                            <div className='form-group'>
                                <input
                                type='text'
                                className='form-control'
                                placeholder='Nombre del Producto'
                                name='nombre'
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                type='number'
                                className='form-control'
                                placeholder='Precio del Producto'
                                name='precio'
                                />
                            </div>
                            <button 
                            type='submit'
                            className='btn btn-primary font-weight-bold text-uppercase d-block w-100'>
                                agregar
                            </button>
                        </form>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default NuevoProducto