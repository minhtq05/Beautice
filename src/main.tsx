import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'

import App from './routes/App.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import SignIn, { action as signinAction } from './routes/SignIn.tsx'
import SignOut, { action as signoutAction } from './routes/SignOut.tsx'
import RegisterPage, { action as registerAction } from './routes/RegisterPage.tsx'
import AuthProvider from './hooks/auth.tsx'
import Home from './routes/Home.tsx'
import About from './routes/About.tsx'
import Service from './routes/Service.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import NotImplemented from './routes/NotImplemented.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: < ErrorPage />,
  },
  {
    path: "signin",
    Component: SignIn,
    action: signinAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "signout",
    Component: SignOut,
    action: signoutAction,
    errorElement: <ErrorPage />,
  },
  {
    path: "register",
    Component: RegisterPage,
    action: registerAction,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    Component: NotImplemented,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    Component: ProtectedRoute,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/Service",
        Component: Service,
      },
      {
        path: "/about",
        Component: About,
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