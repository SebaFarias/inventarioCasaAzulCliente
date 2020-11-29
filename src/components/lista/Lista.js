import React from 'react'
import { Button,Table,Spinner } from "reactstrap";

const Lista = ({data}) => {

return(
  data === []?
  <Spinner color="light"/>
  :
  <Table>
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
              {data.map(( dato , index ) => (
                <tr key={dato._id}>
                  <td>{index+1}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.estado}</td>
                  <td>{dato.lugarFisico}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
)}

export default Lista