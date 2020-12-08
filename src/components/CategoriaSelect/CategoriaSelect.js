import React, { useState } from 'react'
import {
  Button,
  ButtonGroup,
  Container,
  Col,
  FormGroup,
  Row,
  Input
} from 'reactstrap'
import categorias from '../../Hooks/categorias'
import './categoriaSelect.css'

const CategoriaSelect = ({ opciones , handlers , initial }) => {

  const [selected , setSelected] = useState(initial?initial:{})
  const [register , errors ] = handlers

  const handleClick = (opcion, index = -1) => {
    setSelected( prevState => {
      const newSelected = {
        ...prevState
      }
      if(selected[opcion]){
        delete newSelected[opcion]
        if(index > -1) opciones[index+1].map( subopcion => {
          if(newSelected[subopcion])delete newSelected[subopcion]
          return null
        })
      } else {
        newSelected[opcion] = true
      }
      return newSelected
    })
  }

  return(
    <FormGroup>
      <Container fluid="sm">
        <Row>
          <Col xs="3" className='d-flex justify-content-center align-items-center'>
            <label>
              Categorías: 
            </label>
              </Col>
          <Col xs="9" >
            <ButtonGroup className="btn-matrix">
              {opciones[0].map( (opcion , index) => {        
                return(
                  <React.Fragment key={`${index}-${opcion}`}>
                  <Button 
                    style={index===0?{marginLeft: '-1px'}:{}}                  
                    value={opcion} 
                    onClick={() => handleClick(opcion,index)} 
                    active={selected[opcion]}
                    className="boton-celeste"
                  >
                    {`${opcion} ${selected[opcion]?'X':''}`}
                  </Button>
                  {selected[opcion]?
                  opciones[opciones[0].indexOf(opcion)+1].map( subopcion => {
                    return(
                      <Button 
                        key={`${opcion}-${subopcion}`}
                        value={subopcion} 
                        onClick={() => handleClick(subopcion)} 
                        active={selected[subopcion]}
                        className="boton-celeste"
                      >
                        {`${subopcion} ${selected[subopcion]?'X':''}`}
                      </Button>
                    )
                  }):''}
                  </React.Fragment>
                )
              })}
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Input
            type="textArea"
            name="categorias"
            rows='5'
            className="my-4"
            value={categorias.JSONToText(selected)}
            innerRef={register()}
            readOnly
          />
          <span className="text-danger text-small d-block mb-2">
            {errors?.categoria?.message}
          </span>
        </Row>
      </Container>
    </FormGroup>
  )
}

export default CategoriaSelect