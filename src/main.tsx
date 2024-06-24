import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import './index.css'

import App from './routes/App.tsx'
import { Index, Home, About, Service, Blog } from '@/components/index.tsx'
import ErrorPage from './routes/ErrorPage.tsx'
import SignIn, { action as signinAction } from './routes/SignIn.tsx'
import SignOut, { action as signoutAction } from './routes/SignOut.tsx'
import Register, { action as registerAction } from './routes/Register.tsx'
import AuthProvider from './hooks/auth.tsx'
import SizeProvider from './hooks/size.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import NotImplemented from './routes/NotImplemented.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: < ErrorPage />,
    children: [
      {
        index: true,
        Component: Index,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/service",
        Component: Service,
      },
      {
        path: "/gallery",
        Component: NotImplemented,
      },
      {
        path: "/blog",
        Component: NotImplemented,
      },
      {
        path: "/contact-us",
        Component: NotImplemented,
      },
      {
        path: "/profile/:profileid",
        Component: NotImplemented,
      }
    ]
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
    Component: Register,
    action: registerAction,
    errorElement: <ErrorPage />,
  },
  {
    path: '*',
    Component: NotImplemented,
    errorElement: <ErrorPage />,
  },
  // // {
  //   path: "/",
  //   Component: ProtectedRoute,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/home",
  //       Component: Home,
  //     },
  //     {
  //       path: "/service",
  //       Component: Service,
  //     },
  //     {
  //       path: "/about",
  //       Component: About,
  //     }
  //   ]
  // }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SizeProvider>
      <GlobalStyles />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </SizeProvider>
  </React.StrictMode>,
)