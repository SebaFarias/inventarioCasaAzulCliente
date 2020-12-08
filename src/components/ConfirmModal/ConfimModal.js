import React from 'react'
import { Modal , ModalBody , ModalFooter , Button } from 'reactstrap'

const ConfirmModal = ({ open , message , estado , borrar }) => {

  const initial = {
    show: false,
    message:"",
    selectedID:"",
  }

  return(
    <Modal 
    isOpen={open}
    centered
    toggle={() => estado(initial)}
    >
    <ModalBody className="modal-fondo">
      {message}
    </ModalBody>
    <ModalFooter className="modal-fondo">
    <Button
    className="boton-azul"
    onClick={() => estado(initial)}
  >
    Cancelar
  </Button>
  <Button
    color="danger"
    onClick={borrar}
  >
    Eliminar
  </Button>
    </ModalFooter>
  </Modal>
  )
}

export default ConfirmModal