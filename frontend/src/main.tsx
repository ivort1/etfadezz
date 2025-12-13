import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'
import Photos from './pages/Photos.tsx'
import { GeneralFaqs, PricingFaqs, AppointmentsFaqs } from './sections/faqs/faqCategories.tsx';
// import SelectADate from './pages/booking/SelectADate.tsx';

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/faqs-general",
    element: <GeneralFaqs />,
  },
  {
    path: "/faqs-pricing",
    element: <PricingFaqs />,
  },
  {
    path: "/faqs-appointments",
    element: <AppointmentsFaqs />,
  },
  {
    path: "/booking-select-a-date",
    // element: <SelectADate />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)