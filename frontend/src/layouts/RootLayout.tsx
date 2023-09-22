import { Outlet } from 'react-router-dom';
import { Footer } from './footer/Footer';
import { Header } from '../layouts';
import { AuthContextProvider } from '../contexts';

export function RootLayout() {
  return (
    <>
      <Header />
      <main className='min-h-screen bg-accent-400'>
        <AuthContextProvider>
          <Outlet />
        </AuthContextProvider>
      </main>
      <Footer />
    </>
  );
}
