import React , {useState , useEffect} from 'react'
import { FormGroup , ButtonGroup , Button} from 'reactstrap'

const MultipleSelect = ( { opciones , multiple , title} ) => {

  const [ selected , setSelected ] = useState({
    data: []
  })
  const onCheckboxBtnClick = opcion => {
    const index = selected.data.indexOf(opcion);
    if (index < 0) {
      selected.data.push(opcion);
    } else {
      selected.data.splice(index, 1);
    }
    setSelected([...selected]);
  }
  const onMultipleCheckboxClick = opcion => {
    const index = selected.data.indexOf(opcion);
    if (index < 0) {
      selected.data.push(opcion);
    } else {
      selected.data.splice(index, 1);
    }
    setSelected({...selected});
  }
  useEffect(()=>{
    console.log(title,'rerendering')
  },)
  return(
    <FormGroup>
      <label>
        {title}
      </label>
      {opciones.length < 2 ?
        opciones[0].map( (opcion , index) => {
          if(multiple){
            return (
            <ButtonGroup key={opcion}>
              <Button 
              key={opcion}
              color="primary" 
              onClick={() => onCheckboxBtnClick(opcion)} 
              active={selected.data.includes(index)}
              >
                {opcion}
              </Button>)
            </ButtonGroup>
            )
          } else {
        return(
          <ButtonGroup key={opcion}>
          <Button 
            color="primary" 
            onClick={() => setSelected(index)} 
            active={selected.data === index}
          >
            {opcion}
          </Button>
      </ButtonGroup>
        )
      }
    })
      :
      opciones[0].map( (opcion , index) => {
        return (
          <div  key={opcion}>
        <ButtonGroup>
          <Button 
          key={opcion}
          color="primary" 
          onClick={() => multiple? onMultipleCheckboxClick(opcion) : setSelected(prevState=>{return{...prevState,data:index}})}  
          active={multiple ? selected.data.includes(opcion) : selected.data === opcion }
          >
            {opcion}
          </Button>
        </ButtonGroup>
          {selected.data.includes(index)?
          console.log(opcion,'selected.data') : ''}
        </div>
        )
  })}
    </FormGroup>
    )
}

export default MultipleSelect