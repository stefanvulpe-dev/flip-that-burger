import { Outlet } from 'react-router-dom';
import { Footer } from '../layouts/Footer';
import { Header } from '../layouts/Header';

export function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
