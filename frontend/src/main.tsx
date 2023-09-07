import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout.tsx';
import { About } from './pages/About.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/flip-that-burger/' element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path='about' element={<About />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
