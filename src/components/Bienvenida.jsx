const Bienvenida = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"))

  return (
    <section id="home" className="seccion">
      <h2>¡Hola, {usuario?.nombre || "Estudiante"}!</h2>
      <p>Bienvenido al portal educativo. Aquí encontrarás todo lo que necesitas para tu formación.</p>
    </section>
  )
}

export default Bienvenida
