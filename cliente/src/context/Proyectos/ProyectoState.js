import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext'
import proyectoReducer from './proyectoReducer'
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types'


const ProyectoState = props => {

    const proyectos = [
        { id: '1', nombre: 'Tienda Virtual' },
        { id: '2', nombre: 'Intranet' },
        { id: '3', nombre: 'Diseño de sitio web' }
    ];

    const initialState = {
        proyectos: [],
        formulario: false,
        errorFormulario : false,
        proyecto : null
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // serie de funciones para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos con dispatch

    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload : proyectos
        })
    }

    // agregar nuevo proyecto

    const agregarProyecto = proyecto =>{
        proyecto.id = uuidv4();

        // insertar el proyecto en el state
        dispatch({
            type:AGREGAR_PROYECTO,
            payload : proyecto
        })
    }

    // Validar el formulario por errores

    const mostrarError = ()=>{
        dispatch({
            type: VALIDAR_FORMULARIO,

        })
    }

    // selecciona el proyecto que el usuario dio click

    const proyectoActual = proyectoId =>{
        dispatch({
            type: PROYECTO_ACTUAL,
            payload : proyectoId
        })
    }

    // Elimina un proyecto

    const eliminarProyecto = proyectoId =>{
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload : proyectoId
        })
    }

    return (
        <proyectoContext.Provider
            value={{
                proyecto:state.proyecto,
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorFormulario : state.errorFormulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;