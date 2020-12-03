import React , {useState} from 'react'
import { Button, Table } from "reactstrap"
import API from '../../APIcalls/apiCalls'
import ItemModal from '../ItemModal/ItemModal'
import ConfirmModal from '../ConfirmModal/ConfimModal'

const Lista = ({ data , refresh , verModal , editar}) => {
  const [deleteModal, setDeleteModal] = useState({
    show: false,
    message:"",
    selectedID:"",
  })
  const [itemModal, setItemModal] = useState({
    show: false,
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
  setDeleteModal({
    show: false,
    message:"",
    selectedID:"",
  })
}
const modalEditar = (e,dato) => {
  if(e.target.nodeName === 'BUTTON') return 
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
            <tr key={dato._id} onClick={(e)=>{modalEditar(e,dato)}}>
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
      <ConfirmModal 
        open={deleteModal.show}
        message={deleteModal.message}
        estado={setDeleteModal}
        borrar={eliminar}
      />
      <ItemModal 
        open={itemModal.show} 
        data={itemModal.data} 
        estado={setItemModal}
        edit={editar}
      />      
    </>
  )
}
export default Lista