import { Outlet } from 'react-router-dom';
import { Footer } from './footer/Footer';
import { Header } from '../layouts';

export function RootLayout() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-accent-400'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
