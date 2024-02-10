import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import Techstack from './pages/Techstack.jsx'
import Publication from './pages/Publications.jsx'
import AllAplications from './pages/AllAplications.jsx'
import Terminal from './pages/Terminal.jsx'
import { Provider } from 'react-redux';
import siteStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/project",
        element: <Project />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/techStack",
        element: <Techstack />
      },
      {
        path: "/terminal",
        element: <Terminal />
      },
      {
        path: "/publication",
        element: <Publication />
      },
      {
        path: "/allApp",
        element: <AllAplications />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={siteStore}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
