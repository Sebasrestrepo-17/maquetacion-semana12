const Bienvenida = () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"))

  return (
    <section id="home" className="seccion">
      <h2>¡Hola, {usuario?.nombre || "Estudiante"}!</h2>
      <p>Bienvenido al portal educativo. Aquí encontrarás todo lo que necesitas para tu formación.</p>
      <p>Recuerda que puedes acceder a diferentes cursos que amplifiquen tu conocimiento con su respectiva certificación.</p>
      <br />
    </section>
  )
}

export default Bienvenida
