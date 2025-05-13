
import Login from '../pages/Login'
import Home from '../pages/Home'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Acerca from '../pages/Acerca'
import RutaProtegida from '../components/RutaProtegida'
import Layout from '../components/Layout'

export const enrutador = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/',
    element: <RutaProtegida proteger={<Layout />} />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/servicios', element: <Servicios /> },
      { path: '/contacto', element: <Contacto /> },
      { path: '/acerca', element: <Acerca /> }
    ]
  },
  {
    path: '*',
    element: <h2 style={{ padding: '2rem' }}>404 - Página no encontrada</h2>
  }
]


