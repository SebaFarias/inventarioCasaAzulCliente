import React from 'react'
import { Button } from "reactstrap";

const BtnCrear = ({crear}) => {

  return(
    <Button onClick={crear} color="success">Crear</Button>
)}

export default BtnCrear