import './Home.css'


const Contacto = () => (
  <section id="contacto" className="seccion">
    <h3>Contacto</h3>
    <form>
      <input type="text" placeholder="Tu nombre" />
      <input type="email" placeholder="Tu correo" />
      <textarea placeholder="Escribe tu duda..."></textarea>
      <button type="submit">Enviar</button>
    </form>
    <div>
      <p>Dirección: Calle 123, Medellin</p>
      <p>Teléfono: 3112974114</p>
      <p>Correo: sebas4831441@gmail.com</p>
    </div>
  </section>
)

export default Contacto

