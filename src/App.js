import React , {useState , useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from './APIcalls/apiCalls'
import {
  Container,  
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import Lista from './components/Lista/Lista'
import FormularioNuevo from './components/FormularioNuevo/FormularioNuevo'
import FormularioEditar from './components/FormularioEditar/FormularioEditar'

const App = () => {
  const [modal, setModal] = useState({
    show: false,
    message:'',
  })
  const [ state , setState ] = useState({
    title: 'Inventario Casa Azul',
    data: [],
    show: 'index',
    selected: null,
    loading: false,
  })

  const mostrarFormularioNuevo = () => {
    setState( prevState => {
      return({
        ...prevState,
        show: "new",
        title: "Crear Item",
      })
    })
    }
    const showModal = message => {
      setModal({
        show: true,
        message: message
      })
    }
    const mostrarFormularioEditar = id => {
        setState( prevState => {
            return({
          ...prevState,
          show: "edit",
          selected: id,
          title: "Editar Item",
        })
      })
    }
    const mostrarInicio = () => {
      setState( prevState => {
          return({
          ...prevState,
          show:"index",
          title: "Inventario Casa Azul",
        })
      })
    }
  const refresh = async () => {
    setState( prevState => {
      return {
        ...prevState,
        loading: true,
      }
    })      
    await API.getItems()
    .then( res => {
      setState( prevState => {
        return {
          ...prevState,
          data: res.data ? res.data : [],
          loading: false
        }
      })      
    })
  }
  const  main = show => {
    return (
      <main>
        {(() => {
          switch (show) {
            case 'index':
              return (
                <>
                  <Button 
                    onClick={mostrarFormularioNuevo} 
                    color="success"
                    className="my-4 boton-azul"
                  >
                    + Nuevo
                  </Button>
                  <Lista 
                    loading={state.loading}
                    data={state.data}
                    editar={mostrarFormularioEditar}
                    refresh={refresh}
                    verModal={showModal}
                  /> 
                </>
              )
            case 'new':
              return( 
                <FormularioNuevo 
                  volver={mostrarInicio}
                  refresh={refresh}
                  verModal={showModal}
                />
              )
            case 'edit':
              return (
                <FormularioEditar
                  item={state.selected}
                  volver={mostrarInicio}
                  refresh={refresh}
                  verModal={showModal}
                />
              )
            default:
              return null;
          }
        })()}
      </main>
    )
  }
  useEffect( () =>{
    refresh()
  },[])

  
  return (
  <Container className={state.show==='index'?'text-center':''} >
    <h1 className="text-center my-4 text-white">{state.title}</h1>
    { main(state.show) }
    <Modal 
      isOpen={modal.show}
      centered
      toggle={()=>{setModal({show:false,message:''})}}
      >
      <ModalBody
        className="modal-fondo"
      >
        {modal.message}
      </ModalBody>
      <ModalFooter className="modal-fondo">
        <Button
          className="boton-azul"
          onClick={()=>{setModal({show:false,message:''})}}
        >
          Ok
        </Button>
      </ModalFooter>
    </Modal>
  </Container>
  )
}
export default App;