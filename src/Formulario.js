import React, { useState } from 'react';


// la idea de este componete es que pueda mostrar un formulario
// y que este formulario pueda enviar los datos a la app principal

function Formulario({ onAgregarTarjeta }) {

    
    const [nombre, setNombre] = useState ('');
    const [fecha, setFecha] = useState ('');
    const [hora, setHora] = useState ('');
    const [sintomas,setSintomas] = useState ('');

    const datos = {
        nombre: nombre,
        fecha:fecha,
        hora:hora,
        sintomas:sintomas,
    }
  
    const handleChange = (e) => {
        const AdquirirDatos = new FormData(e.tarjet) // creamos un objeto FormData para adquirir los datos del formulario
        e.preventDefault();
        console.log (nombre);
       

        // creamos el objeto crearCita 
        const crearCita = {
            mascota: AdquirirDatos.get("mascota"), // toma el dato de mascota para guardarlo 
            propietario: AdquirirDatos.get("propietario"),
            fecha: AdquirirDatos.get("fecha"),
            hora: AdquirirDatos.get("hora"),
            sintomas: AdquirirDatos.get("sintomas"),
        }
        console.log(crearCita); // muestra en consola el objeto crearCita
      //  onAgregarTarjeta(crearCita) // ejecuta la funcion onAgregarTarjeta y le pasa el objeto crearCita
    };

    return (
     // este es el formulario que se va a mostrar
    // en el tag de form se le agrega el evento onSubmit para que se ejecute la funcion handleChange al momento de enviar el formulario
    // en el tag del boton se le agrega el evento type="submit" para que se ejecute la funcion handleChange al momento de enviar el formulario
        <div className="one-half column">
            <h2>Crear mi Cita</h2>
            <form onSubmit ={handleChange}><label>Nombre Mascota</label>
                <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" onChange ={(e) => setNombre(e.target.value)}/>
                <label>Nombre Dueño</label>

                <input type="text" name="propietario" className="u-full-width" placeholder="1 dueño de la mascota" onChange = {(e)=> setFecha (e.target.value)}/>
                <label>Fecha</label>

                <input type="date" name="fecha" className="u-full-width" onChange = {(e)=> setHora (e. target.value)}/>
                <label>hora</label>

                <input type="time" name="hora" className="u-full-width" onChange={(e)=>setSintomas(e.target.value) }/>
                <label>Sintomas</label>

                <textarea name="sintomas" className="u-full-width"></textarea>
                <button type="submit"className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </div>
    )
}
export default Formulario;

