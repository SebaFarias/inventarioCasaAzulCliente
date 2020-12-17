import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import {  Form , FormGroup , Button , Label, Input } from "reactstrap"
import API from '../../APIcalls/apiCalls'
import Campos from '../../campos'
import categorias from '../../Hooks/categorias'
import tareas from '../../Hooks/tareas'
import MultipleSelect from '../MultipleSelect/MultipleSelect'
import CategoriaSelect from '../CategoriaSelect/CategoriaSelect'
import TareaInput from '../TareaInput/TareaInput' 

const FormularioNuevo = ({ volver, refresh , verModal }) => {

  const {register, errors, handleSubmit} = useForm()
  const checkSubmit = async (data) => {
    data.categorias = categorias.textToArray(data.categorias)
    data.pendiente = tareas.oneStringToStringArray(data.pendiente)
    await API.createItem(data)
    .then( data => {
      verModal(data.message)
      refresh()
      volver()
    })
  }
  const [campos , setCampos] = useState({
    destinoIsFeria: false,
  })
  const handleDestino = event => {
    const isFeria = event.target.value === "Feria Navideña"
    setCampos( prevState =>{
      return ({
        ...prevState,
        destinoIsFeria: isFeria
      })
    })
  }
  return(
    <Form 
      onSubmit={handleSubmit(checkSubmit)}
      className="text-white" 
    > 
    <Button 
        className="my-4 boton-azul"
        onClick={()=>volver()}
      >
        <span>&#60;</span> Volver
      </Button>
      <FormGroup>
      <Label for="nombre">
      Nombre: (Ej: Jarrón Rojo)
      </Label>
      <Input
        className="form-control mb-2"
        name="nombre"
        id="nombre"
        type="text"
        innerRef={register({
          required: {
            value: true,
            message: "El nombre es obligatorio",
          }
        })}
        />
      <span className="text-danger text-small d-block mb-2">
          {errors?.nombre?.message}
      </span>
      </FormGroup>
      <FormGroup>
        <Label for="estado">Estado:</Label>
        <Input 
          type="select" 
          name="estado" 
          id="estado" 
          defaultValue=""
          innerRef={register(
          //   {
          //   required: {
          //     value: true,
          //     message: "El Estado es Obligatorio",
          //   }
          // }
          )}>
            <option disabled value=''>Elige uno...</option>
          {Campos.estado.map( estado => {
            return <option key={estado}>{estado}</option>
          })}
        </Input>
      <span className="text-danger text-small d-block mb-2">
          {errors?.estado?.message }
      </span>
      </FormGroup>
      <FormGroup>
      <MultipleSelect 
        title={"Lugar Físico:"} 
        opciones={Campos.lugarFisico} 
        multiple={false} 
        handlers={[register,errors]}
      />
      </FormGroup>
      <FormGroup>
        <Label for="descripcion">
          Descripción: 
        </Label>
        <Input 
          className="form-control mb-2"
          type="textarea" 
          name="descripcion"
          id="descripcion"
          innerRef={register()}
        />
          <span className="text-danger text-small d-block mb-2">
            {errors?.descripcion?.message}
          </span>
      </FormGroup>
      <FormGroup>
        <Label for="destino">Destino:</Label>
        <Input 
          type="select" 
          name="destino" 
          id="destino" 
          defaultValue=""
          onChange={handleDestino}
          innerRef={register()}>
            <option disabled value=''>Elige uno...</option>
          {Campos.destino.map( destino => {
            return <option key={destino}>{destino}</option>
          })}
        </Input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.destino?.message}
      </span>
      </FormGroup>
      {campos.destinoIsFeria?
      <>
        <FormGroup>
        <Label for="valorEstimado">
          Valor Estimado: 
        </Label>
        <Input
          className="form-control mb-2"
          name="valorEstimado"
          id="valorEstimado"
          type="text"
          innerRef={register()}
          />
        <span className="text-danger text-small d-block mb-2">
          {errors?.valorEstimado?.message}
        </span>
        </FormGroup>
        <FormGroup>
        <Label for="valorFinal">
          Valor Final: 
        </Label>
        <Input
          className="form-control mb-2"
          name="valorFinal"
          id="valorFinal"
          type="text"
          innerRef={register()}
          />
        <span className="text-danger text-small d-block mb-2">
          {errors?.valorFinal?.message}
        </span>
        </FormGroup>
      </>:''}
      
        <CategoriaSelect 
          opciones={Campos.categoria}
          handlers={[register,errors]}
          />
      <TareaInput        
        handlers={[register,errors]}
      />
      <Button 
        type="submit" 
        className="my-4 boton-azul"
        size="lg"
        block
      >
        Agregar
      </Button>
    </Form>
  )
}

export default FormularioNuevo