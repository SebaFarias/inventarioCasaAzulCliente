import React , {useState} from 'react'
import {  Form , FormGroup , Button } from "reactstrap"
import Campos from '../../campos'
import MultipleSelect from '../MultipleSelect/MultipleSelect'

const FormularioNuevo = ({volver}) => {

const [ info , setInfo ] = useState({
  
})

const handleNew = () => {
  volver()
}

const handleChange = event => {
  const target = event.target.name
  const value = event.target.value
  setInfo( prevState => {
    return ({
      ...prevState,
      [target] : value
    })    
  })
}

  return(
    <Form>
      <FormGroup>
      <label>
        Nombre: 
      <input
        className="form-control"
        value={info.nombre}
        name="nombre"
        type="text"
        onChange={handleChange}
      />
      </label>
      </FormGroup>
      <MultipleSelect title={"Estado:"} opciones={Campos.estado} multiple={false}/>
      <MultipleSelect title={"Lugar Físico:"} opciones={Campos.lugarFisico} multiple={false}/>
      <FormGroup>
        <label>
          Descripción: 
        <textarea
          className="form-control"
          value={info.nombre}
          name="nombre"
          rows="5"
          cols="20"
          onChange={handleChange}
          />
        </label>
      </FormGroup>
      <MultipleSelect title={"Destino:"} opciones={Campos.destino} multiple={false}/>
      <MultipleSelect title={"Categorías:"} opciones={Campos.categoria} multiple={true}/>
      <FormGroup>
      
      </FormGroup>
      <FormGroup>
      <label>
        Valor Estimado: 
      <input
        className="form-control"
        value={info.nombre}
        name="valorEstimado"
        type="text"
        onChange={handleChange}
      />
      </label>
      </FormGroup>
      <FormGroup>
      <label>
        Valor Final: 
      <input
        className="form-control"
        value={info.nombre}
        name="valorFinal"
        type="text"
        onChange={handleChange}
      />
      </label>
      </FormGroup>
      <FormGroup>
      <label>
        Tareas: 
      <input
        className="form-control"
        value={info.nombre}
        name="tareas"
        type="text"
        onChange={handleChange}
      />
      </label>
      </FormGroup>
      <Button onClick={handleNew} color="success">Agregar</Button>
    </Form>
  )
}

export default FormularioNuevo