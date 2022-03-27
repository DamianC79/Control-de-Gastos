import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {

  const [ mensaje, setMensaje ] = useState('')
  const [ nombre, setNombre ] = useState('')
  const [ monto, setMonto ] = useState('')
  const [ categoria, setCategoria ] = useState('')
  const [ id, setId ] = useState('')
  const [ fecha, setFecha ] = useState('')

  useEffect( () => {
    if( Object.keys(gastoEditar).length > 0 ){
      setNombre( gastoEditar.nombre)  
      setMonto( gastoEditar.monto)  
      setCategoria( gastoEditar.categoria)  
      setMensaje( gastoEditar.mensaje)
      setId(gastoEditar.id)  
      setFecha(gastoEditar.fecha)  
    }
  }, [])

  const ocultarModal = () => {
    setAnimarModal(false)
    setGastoEditar({})
    setTimeout(() => {
      setModal(false)
    }, 1000);
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if([nombre, monto, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return;
    }

    guardarGasto({nombre, monto, categoria, id, fecha})
  }

  return (
    <div className="modal">

      <div className="cerrar-modal">
        <img
          src={CerrarBtn}
          alt="cerrar modal"
          onClick={ocultarModal}
        />
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >

        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre del Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del gasto"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            />
        </div>
        
        <div className="campo">
          <label htmlFor="monto">Monto del Gasto</label>
          <input
            id="monto"
            type="number"
            placeholder="Añade el monto del gasto"
            value={monto}
            onChange={ (e) => setMonto(Number(e.target.value)) }
            />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>

          <select
            id="categoria"
            value={categoria}
            onChange={ (e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="luz">Luz</option>
            <option value="agua">Agua</option>
            <option value="gas">Gas</option>
            <option value="comida">Comida</option>
            <option value="varios">Varios</option>
            <option value="salud">Salud</option>
            <option value="subscripciones">Subscripciones</option>
            <option value="internet">Internet</option>
          </select>

        </div>

        <input
          type="submit"
          value={gastoEditar.nombre ? 'Guardar Cambios' : 'Añadir Gasto'}
        />

      </form>

    </div>
  )
}

export default Modal