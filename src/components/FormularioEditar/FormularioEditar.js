import React from 'react'
import { useForm } from 'react-hook-form'
import {  Form , FormGroup , Button , Label, Input } from "reactstrap"
import API from '../../APIcalls/apiCalls'
import Campos from '../../campos'
import MultipleSelect from '../MultipleSelect/MultipleSelect'
import lugarFisico from  '../../Hooks/lugarFisico'

const FormularioEditar = ({ item, volver , refresh , verModal }) => {
  const normalize = itemData =>{
    const data = {}
    Object.keys(itemData).map( campo => {
      if(itemData[campo] && campo !== "createdAt" && campo !== "updatedAt" && campo !== "_id"){
        data[campo] = itemData[campo]
      }
      return null
    })
    return data
  }
  const {register, errors, handleSubmit} = useForm({
    defaultValues: normalize(item)
  })
  const checkSubmit = async (data) => {
    const editedItem = {
      ...data,
      _id: item._id
    }
    await API.updateItem(editedItem)
    .then( data => {
      verModal(data.message)
      refresh()
      volver()
    })
  }
  return(
    <Form onSubmit={handleSubmit(checkSubmit)}> 
      <Button 
        color="success" 
        className="my-4"
        onClick={()=>volver()}
        >
        Volver
      </Button>
      <FormGroup>
      <Label for="nombre">
        Nombre: 
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
          innerRef={register({
            required: {
              value: true,
              message: "El Estado es Obligatorio",
            }
          })}>
            <option disabled value=''>Elige uno...</option>
          {Campos.estado.map( estado => {
            return <option key={estado}>{estado}</option>
          })}
        </Input>
        <span className="text-danger text-small d-block mb-2">
          {errors?.estado?.message}
      </span>
      </FormGroup>
      <FormGroup>
      <MultipleSelect 
        title={"Lugar Físico:"} 
        init={lugarFisico.JSONToForm(item).piso}
        opciones={Campos.lugarFisico} 
        multiple={false} 
        handlers={[register,errors]}
      />
      </FormGroup>
      <FormGroup>
        <Label for="descripcion">
          Descripción: 
        </Label>
        <textarea
          className="form-control mb-2"
          name="descripcion"
          id="descripcion"
          rows="5"
          cols="20"
          innerRef={register}
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
      {/* <MultipleSelect title={"Categorías:"} opciones={Campos.categoria} multiple={true} handlers={[register,errors]}/> */}
      <FormGroup>
      <Label for="valorEstimado">
        Valor Estimado: 
      </Label>
      <Input
        className="form-control mb-2"
        name="valorEstimado"
        id="valorEstimado"
        type="text"
        innerRef={register}
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
        innerRef={register}
        />
      <span className="text-danger text-small d-block mb-2">
        {errors?.valorFinal?.message}
      </span>
      </FormGroup>
      <FormGroup>
      <Label for="tareas">
        Tareas: 
      </Label>
        <textarea
          className="form-control mb-2"
          name="tareas"
          id="tareas"
          rows="5"
          cols="20"
          innerRef={register}
          />
        <span className="text-danger text-small d-block mb-2">
          {errors?.tareas?.message}
        </span>
      </FormGroup>
      <Button type="submit" color="success">Guardar</Button>
    </Form>
  )
}

export default FormularioEditar