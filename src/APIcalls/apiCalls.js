//const API_URL = "https://inventario-casa-azul.herokuapp.com"// PRODUCTION
const API_URL = "http://localhost:8080"//DEV
const ITEMS_ROUTE = "/items"

const apiMethods = {
  getItem: async id => {
    let response 
    await fetch(`${API_URL}${ITEMS_ROUTE}/getItem/${id}`)
    .then(res => {
      response = res.json()
    })
    .catch( err => {
      console.log(err)
    })
    return response
  },
  getItems: async() => {
    let response 
    await fetch(`${API_URL}${ITEMS_ROUTE}/getItems`)
    .then(res => {
      response = res.json()
    })
    .catch( err => {
      console.log(err)
    })
    return response
  },
  createItem: async data => {
const reqBody = {
      ...data
  }    
  const response = await fetch(`${API_URL}${ITEMS_ROUTE}/createItem`,{
    method: 'PUT',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json'
    },
    redirect: "follow",
    referrerPolicy: 'no-referrer',
    body:JSON.stringify(reqBody)
  })
    return response.json() 
  },
  updateItem: async data => {
    const reqBody = {
          ...data
      }    
      const response = await fetch(`${API_URL}${ITEMS_ROUTE}/updateItem/${data._id}`,{
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json'
        },
        redirect: "follow",
        referrerPolicy: 'no-referrer',
        body:JSON.stringify(reqBody)
      })
        return response.json() 
  },
  deleteItem: async id => {
    let response
    await fetch(`${API_URL}${ITEMS_ROUTE}/deleteItem/${id}`,{
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-type': 'application/json'
      },
      redirect: "follow",
      referrerPolicy: 'no-referrer',
    })
    .then(res => {
      response = res.json()
    })
    .catch( err => {
      console.log(err)
    })
    return response
  },
}

export default  apiMethods