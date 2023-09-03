import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/index';

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
