import Campos from '../campos'

const lugarFisico = {
  formToJSON: data => {
    const dataNormalized = {...data}
    delete dataNormalized.piso 
    return dataNormalized
  },
  JSONToForm: data => {
    const lugar = data.lugarFisico
    const model = Campos.lugarFisico
    const dataNormalized = {...data}
    model.map( (pisos,index)=>{
      if(pisos.includes(lugar)) return dataNormalized.piso = index
      return null
    })    
    return dataNormalized
  }
}

export default lugarFisico