
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () =>{
    const respuesta = confirm('¿Deseas eliminiar este paciente?');

    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-indigo-600 uppercase">Nombre: {''}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase">Propietario: {''}
        <span className="font-normal normal-case text-black">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase">Email: {''}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase">Fecha alta: {''}
        <span className="font-normal normal-case text-black">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-indigo-600 uppercase">Síntomas: {''}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex flex-col md:flex-row md:justify-evenly mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg mb-5 md:mb-0"
          onClick= {() => setPaciente(paciente)}
        >Editar</button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={ handleEliminar }
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente