import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthGuard } from './guards/auth.guard'
import { PrivateRoutes, PublicRoutes } from './models/routes.model'
import { lazy } from 'react'

const Login = lazy(() => import('./pages/Login'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

function App() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
