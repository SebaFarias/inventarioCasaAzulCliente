state = {
  data: data,
  modalActualizar: false,
  modalInsertar: false,
  form: {
    id: "",
    personaje: "",
    anime: "",
  },
};

mostrarModalActualizar = (dato) => {
  this.setState({
    form: dato,
    modalActualizar: true,
  });
};

cerrarModalActualizar = () => {
  this.setState({ modalActualizar: false });
};

mostrarModalInsertar = () => {
  this.setState({
    modalInsertar: true,
  });
};

cerrarModalInsertar = () => {
  this.setState({ modalInsertar: false });
};

editar = (dato) => {
  var contador = 0;
  var arreglo = this.state.data;
  arreglo.map((registro) => {
    if (dato.id === registro.id) {
      arreglo[contador].personaje = dato.personaje;
      arreglo[contador].anime = dato.anime;
    }
    return contador++;
  });
  this.setState({ data: arreglo, modalActualizar: false });
};

eliminar = (dato) => {
  var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
  if (opcion === true) {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo.splice(contador, 1);
      }
      return contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  }
};

insertar= ()=>{
  var valorNuevo= {...this.state.form};
  valorNuevo.id=this.state.data.length+1;
  var lista= this.state.data;
  lista.push(valorNuevo);
  this.setState({ modalInsertar: false, data: lista });
}

handleChange = (e) => {
  this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value,
    },
  });
};    