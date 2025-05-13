import './Home.css'

import Bienvenida from '../components/Bienvenida'
import Noticias from '../components/Noticias'

const Home = () => {
  return (
   <section className='contenido-home'>
    <Bienvenida />
    <Noticias />
   </section>
  )
}

export default Home
