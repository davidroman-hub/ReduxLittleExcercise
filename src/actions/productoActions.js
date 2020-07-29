import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR

} from '../types/index'

// Crear nuevos productos

export function crearNuevoProductoAction(producto) {
    return (dispatch) => {
      //  console.log('desde action')
       // console.log(producto)
       dispatch( agregarProducto());

       try {
           //dispatch manda a llamar a las funciones

           dispatch(agregarProductoExito(producto))
       } catch (error) {
           dispatch(agregarProductoError(true))
       }
    }
}

const agregarProducto = () => ({
    type:AGREGAR_PRODUCTO,
     payload: true

})

// si el producto se guarda en la base de datos o si hay un error

const agregarProductoExito = producto => ({
    type:AGREGAR_PRODUCTO_EXITO,
    // para a modificar state se pasa un payload
    payload:producto
})

const agregarProductoError = () => {
    //
}