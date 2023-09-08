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
import { About, Menu, PageNotFound } from './pages/';
import { Contact } from './pages/Contact.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path='/flip-that-burger'>
        <Route index element={<App />} />
        <Route path='about' element={<About />} />
        <Route path='menu' element={<Menu />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
