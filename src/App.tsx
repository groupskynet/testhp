import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './models/routes.model'
import { lazy } from 'react'

const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const PrivateRoute = lazy(() => import('./utils/PrivateRoute'))

function App() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min:h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route path={PublicRoutes.REGISTER} element={<Register />} />
          <Route path={PrivateRoutes.DASHBOARD} element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
