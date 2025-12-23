import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx'
// import BookingConfirmation from './pages/Confirmation.tsx'

// Fonts
import '@fontsource/poppins/400.css';   
// Supports weights 300-900
import '@fontsource-variable/merriweather/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/confirmation",
  //   element: <BookingConfirmation />,
  // }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)