import React , {useState} from 'react'
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  ListGroup, 
  ListGroupItem,
  Label,
  Input,
  Button,
} from 'reactstrap'
import tareasHook from '../../Hooks/tareas'

const TareaInput = ({ initial , handlers }) => {

  const [register , errors] = handlers
  const [tareas , setTareas] = useState({
    todas: initial? initial : [],
    nueva:''
  })

  const addTarea = () => {
    setTareas( prevState => {
      const newTarea = prevState.nueva.trim()
      const newList = prevState.todas
      if(newTarea && !newList.includes(newTarea)) newList.push(newTarea)
      return ({
        ...prevState,
        todas: newList,
        nueva: '',
      })
    })
  }
  const removeTarea = tarea => {
    setTareas( prevState => {
      const newList = prevState.todas
      const removedIndex = newList.indexOf(tarea)
      if(newList.includes(tarea)) newList.splice(removedIndex,1)
      return ({
        ...prevState,
        todas: newList,
        nueva: '',
      })
    })
  }
  const handleChange = event => {
    const tarea = event.target.value
    setTareas( prevState => {
      return({
        ...prevState,
        nueva: tarea,
      })
    })
  }
  return (
    <FormGroup>
      <Label for="pendiente">
        Tareas pendientes: 
      </Label>
      <InputGroup>
        <Input
          className="form-control mb-2"
          type="Text"
          id="pendiente"
          onChange={handleChange}
        />
        <InputGroupAddon addonType="append">
          <Button
            color="primary"
            className="form-control mb-2 boton-azul"
            value={tareas.nueva}
            onClick={addTarea}
          >
            +
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <ListGroup flush className="lista-tarea">
        {tareas.todas.map( tarea => {
          return(
          <ListGroupItem 
            key={tarea}
          >
            {tarea} 
            <Button 
              color="danger"
              className="float-right"
              onClick={() => {removeTarea(tarea)}}
            >
              -
            </Button>
          </ListGroupItem>)
        })}
      </ListGroup>
      <Input 
        className="d-none"
        type="textarea" 
        name="pendiente"
        value={tareasHook.stringArrayToOneString(tareas.todas)}
        innerRef={register()}
        readOnly
      />
      <span className="text-danger text-small d-block mb-2">
        {errors?.pendiente?.message}
      </span>
    </FormGroup>
  )
}

export default TareaInput