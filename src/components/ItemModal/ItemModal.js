import React from 'react'
import { 
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import categorias from '../../Hooks/categorias'

const ItemModal = ({ data , open , estado, edit , eliminar}) => {

  const toggle = () => estado( prevState => {
    return {
      ...prevState,
    show: !prevState.show
    }
  });
  

  return(
    <Modal 
      isOpen={open} 
      toggle={toggle}       
      centered
    >
      <ModalHeader className="recuadro" cssModule={{'modal-title': 'w-100 d-flex justify-content-center align-items-center'}}>
        <div className="text-center w-100">{data.nombre}</div>
          <img 
            className="rounded"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXi4uL////09PS6vLzu7u7p6enR0tLk5OTe3t7Y2dn29vbV1tbx8fHNz8/n5+e3ubnExsbHyMi+wMCx8W6hAAADkUlEQVR4nO3c6XKbMBRAYYvFYrOJ/f4PWwOJY0AYJGuLer5p/3Y4w5V1ncn0dAIAAAAAAAAAAAAAAAAAAAAAAADwn8tk6CdwrGi60I/g1rXJmiL0QzjVZVnWXEM/hUNlkw3SPYoym6R7FL8D0z2KRfNMTPMoymfgIzHJo5i9SPJWLJtZYnpHUc4CUzyKXbbQhH4iy8pmWZhloZ/JKrnuS+wormZ0TCxDP5Y9qhkdaN6KZbS3qGpGt46iHCn/mUJE++mknFHlUZSybs+Xtq4UkZ0QsSZuzejqKMrT+d73ff74c6uXiY0YRPkBvD2j2XxBlW3e5z/622nWOAUKEeO6V2y/wmz2XfHrt2/08hqleIrvjnkzo/OjuAzM+2fiVYh4E9/O6MtRlPd85SexFCLixM3P0flRlJflGxzcx3+iEAtRbQo7MzoWPo6irFSBeX6T0y2xENP3kv3A8SheFTM6zekpWwcKEc9ysz+jY2JZq19h3n81qsB4Eg/M6JR4Uxf2d8WITkKnTXY/R3/nVFnY3zfeoIhlf3t/188SpSKx/9rsiyTx6IyOieuT2J/fBUaReLwvUxzFvn4fGMEWfnxGx8JufmH0p73A4Fv4VStwdRRXi4xK2P1Nr29IbF8SN2+JeBL1ZnRK/Pl2sXnPr4VbUa/afQ/dkVsikkR5bF1bvsTT8BL7m0ZgsC3cYEbHxMdR3LsGV4KsqDp3/Tzx1leagUESD++ja8V1vyiCRMMZHRj0PfY334m6d/2ngf5XVKPP0cHhWzBwovGMmgf6TTSe0U8CvW7hhn0fBnpMNJ3RTwO9beGmd/3Hfd4SO6PCz1/gyMcWbjajlgJ9JJp9jloL9PBFw6TPZqDzRKMZtRroeAs3+kphOdDtFm6yj1ruE073N5MZtR/oMNHgZ0+2J9Rxov6MOgp0lai/rjkLdLOF63+OOgx0kqg9o04DHWzh2jPqOND6irr8NfVdrvusJ+rOqIdAuyuq5ow6n9Bv9vY3zRn1FWgxUW9G/QVa+6UbvRn1GWhpudG7670GWkrU+tmT3z47iWWjwXugjcRSQxFAF8tvMQIAsKd6J/TDWdGeN13a0A9nhXwn9MMBwN+R/gdpvSH0c9nTqiVUyH0PADYk/0Farb/9rv6Pmj+uqupq/jeNH2AAACxL+b4f1ZeZ9K/DFF8iAAAHyPY2Ood+EHcS3tgAAAAAAAAAAAAAAAAAAACS8A9/zECogkqNlQAAAABJRU5ErkJggg=="
            alt="Miniatura del Item solicitado"
          ></img>         
      </ModalHeader>
      <ModalBody className="recuadro">
        <ListGroup flush>
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-center"
            >
              Detalles
            </ListGroupItem>
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-between"
            >
              <div>Estado</div>
              <div>{data.estado}</div>
            </ListGroupItem>
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-between"
            >
              <div>Lugar</div>
              <div>{data.lugarFisico}</div>
            </ListGroupItem>
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-between"
            >
              <div>Descripcion</div>
              <div>{data.descripcion}</div>
            </ListGroupItem>
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-between"
            >
              <div>Destino</div>
              <div>{data.destino}</div>
            </ListGroupItem>
            {data.destino === "Feria Navideña"?
              <>
                <ListGroupItem 
                  className="recuadro py-2 d-flex justify-content-between"
                >
                  <div>Valor Estimado</div>
                  <div>{data.valorEstimado}</div>
                </ListGroupItem>
                <ListGroupItem 
                  className="recuadro py-2 d-flex justify-content-between"
                >
                  <div>Valor Final</div>
                  <div>{data.valorFinal}</div>
                </ListGroupItem>
              </>
            :''}
            <ListGroupItem 
              className="recuadro py-2 d-flex justify-content-between"
            >
              <div>Categorías</div>
              <div className="text-right">{data.categorias?categorias.arrayToText(data.categorias).replace(/,/gi,' , '):''}</div>
            </ListGroupItem>
            <ListGroupItem 
                  className="recuadro py-2 d-flex justify-content-between"
                >
                  <div>Tareas</div>
                  <ul>
                    {data.pendiente?.map( tarea => {
                      return <li key={tarea}>{tarea}</li>
                    })}
                  </ul>
                </ListGroupItem>
        </ListGroup>
      </ModalBody>
      <ModalFooter className="recuadro">
        <Button
        className="boton-azul"
        onClick={() => estado({
          show: false,
          data:[],
        })}
        >
          <span>&#60;</span> Volver
        </Button>
        <Button
          className="boton-azul"
          onClick={() => {
            edit(data)
          }}
        >
          Editar
        </Button>
        <Button
          color="danger"
          onClick={() => {
            eliminar(data)
          }}
        >
          Eliminar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ItemModal