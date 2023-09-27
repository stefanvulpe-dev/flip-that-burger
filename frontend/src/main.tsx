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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<App />} />
      <Route path='about' element={<About />} />
      <Route path='menu' element={<Menu />} />
      <Route path='contact' element={<Contact />} />
      {/* <Route element={<RequireAuth />}> */}
      <Route path='profile' element={<UserProfile />} />
      <Route path='edit-profile' element={<EditProfile />} />
      <Route path='online-order' element={<OnlineOrder />} />
      {/* </Route> */}
      <Route path='login' element={<Login />} />
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>,
  ),
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
