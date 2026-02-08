import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import Platform from './Pages/Platform'
import Solution from './Pages/Solutions'
import References from './Pages/CaseStudies'
import Blog from './Pages/Blog'
import Company from './Pages/Company'
import Contact from './Pages/Contact'
import PrivacyPolicy from './Pages/Privacy'
import TermsOfService from './Pages/Terms'

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },

        {
          path: "/platform",
          element: <Platform />
        },
        {
          path: "/solution",
          element: <Solution />
        },
        {
          path: "/case",
          element: <References />
        },

        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/company",
          element: <Company />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/request-demo",
          element: <Contact />
        },
        {
          path: "/get-in-touch",
          element: <Contact />
        },


      ]
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />
    },
    {
      path: "/terms-of-service",
      element: <TermsOfService />
    },
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App