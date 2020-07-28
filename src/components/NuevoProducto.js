import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

//Actions redux
import { crearNuevoProductoAction } from '../actions/productoActions'

   

const NuevoProducto = () => {

    //State del componente // solo se quedara aqui asi que lo utilizamos solo aqui
        const[nombre, guardarNombre] = useState('')
        const [precio, guardarPrecio] =useState(0)

    // utilizar use dispatch y te crea una funcion
                        // Siempre que venga algo del action utilizar dispatch
    const dispatch = useDispatch();

    // mandar a llamar a funcion action 
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto))

     //Cuando el usuario haga submit
     const submitNuevoProducto = e => {
        e.preventDefault();

        //Validar formulario
            if(nombre.trim === '' || precio <= 0){
                return;
            }
        // si no hay errores

        // crear nuevo producto
        agregarProducto({
            nombre,
            precio
        })
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
                                value={nombre}
                                onChange={ e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <input
                                type='number'
                                className='form-control'
                                placeholder='Precio del Producto'
                                name='precio'
                                value={precio}
                                onChange={ e => guardarPrecio(Number(e.target.value))}
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