const tareas = {
  stringArrayToOneString: array => {
    if(array.length < 1) return ''
    return array.join('#')
  },
  oneStringToStringArray: string => {
    return string.split('#')
  }
}

export default tareas