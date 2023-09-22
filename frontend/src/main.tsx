import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { RootLayout } from './layouts';
import {
  About,
  Contact,
  EditProfile,
  Login,
  Menu,
  OnlineOrder,
  PageNotFound,
  SignUp,
  UserProfile,
} from './pages';
import { RequireAuth } from './components/index.ts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='menu' element={<Menu />} />
      <Route path='contact' element={<Contact />} />
      <Route element={<RequireAuth />}>
        <Route path='profile' element={<UserProfile />} />
        <Route path='edit-profile' element={<EditProfile />} />
        <Route path='online-order' element={<OnlineOrder />} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
