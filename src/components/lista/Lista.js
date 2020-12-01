import React , {useState} from 'react'
import { Button, Table , ModalFooter, ModalHeader, ModalBody , Modal } from "reactstrap"
import API from '../../APIcalls/apiCalls'

const Lista = ({ data , refresh , verModal , editar}) => {
  const initial = {
    show: false,
    message:"",
    selectedID:"",
  }
  const [deleteModal, setDeleteModal] = useState(initial)
  const [itemModal, setItemModal] = useState({
    show: false,
    title: "",
    data: [],
  })

const eliminarClick = dato => {
  setDeleteModal({
    show:true,
    message:`Confirmas que quieres eliminar ${dato.nombre}?`,
    selectedID: dato._id,
  })
}
const eliminar = async() => {
  await API.deleteItem(deleteModal.selectedID)
  .then( res => {
    refresh()
    verModal(res.message)
  })
  setDeleteModal(initial)
}
const modalEditar = dato => {
  setItemModal({
    show: true,
    title: dato.nombre,
    data: dato,
  })
}

return(
  <>
  <Table hover>
    <thead>
      <tr>
        <th>N°</th>
        <th>Nombre</th>
        <th>Estado</th>
        <th>Lugar</th>
        <th>Acción</th>
      </tr>
    </thead>

    <tbody>
    {data.length < 1?
    <tr>
      <td align="center" colSpan="5">No existen items en el Inventario</td>
    </tr>
  :
      data.map(( dato , index ) => (
        <tr key={dato._id} onClick={()=>{modalEditar(dato)}}>
          <td>{index+1}</td>
          <td>{dato.nombre}</td>
          <td>{dato.estado}</td>
          <td>{dato.lugarFisico}</td>
          <td align="center">
            <Button
              color="primary"
              onClick={() => {
                editar(dato)
              }}
            >
              Editar
            </Button>{" "}
            <Button color="danger" onClick={()=> eliminarClick(dato)}>Eliminar</Button>
          </td>
        </tr>
      ))}
    </tbody>
    </Table>
    <Modal isOpen={deleteModal.show}>
      <ModalHeader>
        {deleteModal.message}
      </ModalHeader>
      <ModalFooter>
      <Button
      color="primary"
      onClick={() => setDeleteModal(initial)}
    >
      Cancelar
    </Button>
    <Button
      color="danger"
      onClick={() => eliminar()}
    >
      Eliminar
    </Button>
      </ModalFooter>
    </Modal>
    <Modal isOpen={itemModal.show}>
      <ModalHeader>
        {itemModal.title}
      </ModalHeader>
      <ModalBody>
        {itemModal.data.estado}
      </ModalBody>
      <ModalFooter>
      <Button
      color="success"
      onClick={() => setItemModal({
        show: false,
        title:'',
        data:[],
      })}
    >
      Volver
    </Button>
    <Button
      color="primary"
      onClick={() => {
        editar(itemModal.data)
      }}
    >
      Editar
    </Button>
      </ModalFooter>
    </Modal>
  </>
)}

export default Lista