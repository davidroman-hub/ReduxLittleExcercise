import React from 'react'

const NuevoProducto = () => {
    return(
        <div className='row justify-content-center'>
            <div className='col-md-8'>
                <div className='card'>
                    <div className='card-body'>
                        <h2 className='text-center mb-4 font-weight-bold'>
                            Agregar Nuevo Producto
                        </h2>
                        <form>
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