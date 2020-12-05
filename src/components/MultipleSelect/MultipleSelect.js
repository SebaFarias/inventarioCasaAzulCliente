import React , {useState} from 'react'
import { FormGroup , ButtonGroup , Button , Label , Input , Col, Row, Container} from 'reactstrap'

const MultipleSelect = ( { init , opciones , title , handlers} ) => {

  const [ selected , setSelected ] = useState(init?init-1:null)
  const [register , errors ] = handlers
  
  return(
    
    <FormGroup>
      <Container fluid="sm">
        <Row>
        <Col xs="3">
      <label>
        {title}
      </label>
        </Col>
        <Col xs="9">
          <ButtonGroup 
            name="piso"
          >
        {opciones[0].map( (opcion , index) => {        
          return(
          <Button 
            key={opcion}
            value={index+1} 
            onClick={() => setSelected(index)} 
            active={selected === index}
            >
            {opcion}
          </Button>
        )
      }
      )}
      </ButtonGroup>
      </Col>
      </Row>
      <Row>
        <Label 
          for="lugarFisico"
        >
          {selected === null ? "Escoge un piso:" :`${opciones[0][selected]}: `}
        </Label>
        <Input 
          type="select" 
          name="lugarFisico" 
          id="lugarFisico" 
          defaultValue=""
          innerRef={register({
            required: {
              value: true,
              message: "El Lugar es Obligatorio",
            }
          })}>
            <option disabled value=''>Elige uno...</option>
          {opciones[selected+1].map( lugar => {
            return <option key={lugar}>{lugar}</option>
          })}
        </Input>
      <span className="text-danger text-small d-block mb-2">
        {errors?.lugarFisico?.message}
      </span>
          </Row>
      </Container>
    </FormGroup>
    )
}

export default MultipleSelect

