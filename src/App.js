import React , {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import API from './APIcalls/apiCalls'
import {
  Container,  
} from "reactstrap";
import Lista from './components/lista/Lista'
import BtnCrear from './components/BtnCrear/BtnCrear'
import FormularioNuevo from './components/FormularioNuevo/FormularioNuevo'
import FormularioEditar from './components/FormularioEditar/FormularioEditar'

const data = [

];

const App = () => {
  const [ state , setState ] = useState({
    title: "Inventario Casa Azul",
    data: data,
    show: "index",
    selected: null,
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
    // const mostrarFormularioEditar = id => {
      //   setState( prevState => {
        //     return({
    //       ...prevState,
    //       show: "edit",
    //       selected: id,
    //       title: "Editar Item",
    //     })
    //   })
    // }
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
    let newData = await API.getItems().then( res => {
      return res.data
    })
    setState( prevState => {
      return {
        ...prevState,
        data: newData
      }
    })
  }
  const  main = show => {
    return (
      <main>
        {(() => {
          switch (show) {
            case 'index':
              return (
                <div>
                  <BtnCrear crear={mostrarFormularioNuevo}/>
                  <Lista data={state.data}/> 
                </div>
              )
            case 'new':
              return < FormularioNuevo volver={mostrarInicio}/>
            case 'edit':
              return < FormularioEditar item={state.selected}/>
            default:
              return null;
          }
        })()}
      </main>
    )
  }
  refresh()
  return (
  <Container>
    <h1>{state.title}</h1>
    { main(state.show) }  
  </Container>
  )
}
export default App;