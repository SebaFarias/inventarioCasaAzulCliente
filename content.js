<>
<Container>
  
<br />
  <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
  <br />
  <br />
  <Lista data={this.state.data}/>
</Container>

<Modal isOpen={this.state.modalActualizar}>
  <ModalHeader>
    <div><h3>Editar Registro</h3></div>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
      <label>
        Id:
      </label>
    
      <input
        className="form-control"
        readOnly
        type="text"
        value={this.state.form.id}
      />
    </FormGroup>
    
    <FormGroup>
      <label>
        Personaje: 
      </label>
      <input
        className="form-control"
        name="personaje"
        type="text"
        onChange={this.handleChange}
        value={this.state.form.personaje}
      />
    </FormGroup>
    
    <FormGroup>
      <label>
        Anime: 
      </label>
      <input
        className="form-control"
        name="anime"
        type="text"
        onChange={this.handleChange}
        value={this.state.form.anime}
      />
    </FormGroup>
  </ModalBody>

  <ModalFooter>
    <Button
      color="primary"
      onClick={() => this.editar(this.state.form)}
    >
      Editar
    </Button>
    <Button
      color="danger"
      onClick={() => this.cerrarModalActualizar()}
    >
      Cancelar
    </Button>
  </ModalFooter>
</Modal>



<Modal isOpen={this.state.modalInsertar}>
  <ModalHeader>
    <div><h3>Insertar Personaje</h3></div>
  </ModalHeader>

  <ModalBody>
    <FormGroup>
      <label>
        Id: 
      </label>
      
      <input
        className="form-control"
        readOnly
        type="text"
        value={this.state.data.length+1}
      />
    </FormGroup>
    
    <FormGroup>
      <label>
        Personaje: 
      </label>
      <input
        className="form-control"
        name="personaje"
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>
    
    <FormGroup>
      <label>
        Anime: 
      </label>
      <input
        className="form-control"
        name="anime"
        type="text"
        onChange={this.handleChange}
      />
    </FormGroup>
  </ModalBody>

  <ModalFooter>
    <Button
      color="primary"
      onClick={() => this.insertar()}
    >
      Insertar
    </Button>
    <Button
      className="btn btn-danger"
      onClick={() => this.cerrarModalInsertar()}
    >
      Cancelar
    </Button>
  </ModalFooter>
</Modal>
</>