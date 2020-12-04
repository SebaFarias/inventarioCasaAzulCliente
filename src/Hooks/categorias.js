import Campos from '../campos'

const categorias = {
  arrayToJSON: data => {
    const dataNormalized = {}
    data.map( categoria => {
      return dataNormalized[categoria]= true
    })
    return dataNormalized
  },
  textToArray: data => {
    return data.split(' , ')
  },
  arrayToText: data => {
    return data.join(' , ')
  },
  JSONToText: data => {
    const categoriasArray = Object.keys(data)
    const dataNormalized = categoriasArray.join(' , ')
    return dataNormalized
  }
}

export default categorias