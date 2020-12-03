import React from 'react'
import { 
  Modal, 
  ModalBody, 
  ModalHeader, 
  ModalFooter, 
  Button, 
} from 'reactstrap'
import Table from 'reactstrap/lib/Table'

const ItemModal = ({ data , open , estado, edit }) => {

  return(
    <Modal isOpen={open}>
      <ModalHeader>
        {data.nombre}
      </ModalHeader>
      <ModalBody>
        <Table>
          <tbody>
            <tr>
              <td>Estado</td>
              <td align="right">{data.estado}</td>
            </tr>
            <tr>
              <td>Lugar</td>
              <td align="right">{data.lugarFisico}</td>
            </tr>
            <tr>
              <td>Descripcion</td>
              <td align="right">{data.descripcion}</td>
            </tr>
            <tr>
              <td>Destino</td>
              <td align="right">{data.destino}</td>
            </tr>
            <tr>
              <td>Valor Estimado</td>
              <td align="right">{data.valorEstimado}</td>
            </tr>
            <tr>
              <td>Valor Final</td>
              <td align="right">{data.valorFinal}</td>
            </tr>
            <tr>
              <td>Tareas</td>
              <td align="right">{data.tareas}</td>
            </tr>
          </tbody>
        </Table>
      </ModalBody>
      <ModalFooter>
        <Button
        color="success"
        onClick={() => estado({
          show: false,
          data:[],
        })}
        >
          Volver
        </Button>
        <Button
          color="primary"
          onClick={() => {
            edit(data)
          }}
        >
          Editar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ItemModal