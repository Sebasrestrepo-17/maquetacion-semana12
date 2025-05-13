// src/components/Layout.jsx
import MenuLateral from './MenuLateral'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const usuario = JSON.parse(localStorage.getItem('usuario'))

  return (
    <div className="aplicacion">
      {usuario && <MenuLateral />}
      <div className="aplicacion__contenido">
        <div className="aplicacion__contenido-fondo"></div>
        <main className="aplicacion__principal">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
