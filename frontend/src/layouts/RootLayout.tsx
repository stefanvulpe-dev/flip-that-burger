import { Outlet } from 'react-router-dom';
import { Footer } from './footer/Footer';
import { Header } from '../layouts';
import { AuthContextProvider } from '../contexts';

export function RootLayout() {
  return (
    <AuthContextProvider>
      <Header />
      <main className='min-h-screen bg-accent-400'>
        <Outlet />
      </main>
      <Footer />
    </AuthContextProvider>
  );
}
