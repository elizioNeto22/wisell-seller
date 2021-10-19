import React, { useContext } from 'react'
import AuthContext from '../store/auth-context'

import AppRoutes from './app.routes'
import Auth from './auth.routes'

import Navbar from '../app/shared/Navbar'
import Sidebar from '../app/shared/Sidebar'
import Footer from '../app/shared/Footer'

const Routes = () => {
  const authCtx = useContext(AuthContext)
  return (
    <>
      <div className="container-scroller">
        <Navbar />
        <div className="container-fluid page-body-wrapper">
          <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Routes
