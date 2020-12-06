import React , {useState} from 'react'
import { Table , Spinner} from "reactstrap"
import API from '../../APIcalls/apiCalls'
import ItemModal from '../ItemModal/ItemModal'
import ConfirmModal from '../ConfirmModal/ConfimModal'

const Lista = ({ loading , data , refresh , verModal , editar}) => {
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
  setItemModal({
    show: false,
    data: [],
  })
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
          </tr>
        </thead>

        <tbody>
        {loading?
        <tr>
        <td align="center" colSpan="4"><Spinner style={{ width: '5rem', height: '5rem' }} /></td>
      </tr>
        :
        data.length < 1?
        <tr>
          <td align="center" colSpan="4">No existen items en el Inventario</td>
        </tr>
      :
          data.map(( dato , index ) => (
            <tr key={dato._id} onClick={(e)=>{modalEditar(e,dato)}}>
              <td>{index+1}</td>
              <td>{dato.nombre}</td>
              <td>{dato.estado}</td>
              <td>{dato.lugarFisico}</td>
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
        eliminar={eliminarClick}
      />      
    </>
  )
}
export default Lista