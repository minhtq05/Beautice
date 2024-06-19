import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'

import App from './routes/App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import SignInPage, { action as signinAction } from './routes/SignInPage.tsx'
import RegisterPage, { action as registerAction } from './routes/RegisterPage.tsx'
import AuthProvider from './hooks/auth.tsx'
import Home from './routes/Home.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: < ErrorPage />,
  },
  {
    path: "signin",
    Component: SignInPage,
    action: signinAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    Component: RegisterPage,
    action: registerAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    Component: ProtectedRoute,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
