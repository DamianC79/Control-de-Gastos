import {useState, useEffect} from 'react'

const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                >
                    <option value="">--Todos los gastos--</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="luz">Luz</option>
                    <option value="agua">Agua</option>
                    <option value="gas">Gas</option>
                    <option value="comida">Comida</option>
                    <option value="varios">Varios</option>
                    <option value="salud">Salud</option>
                    <option value="subscripciones">Subscripciones</option>
                    <option value="ocio">Ocio</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros