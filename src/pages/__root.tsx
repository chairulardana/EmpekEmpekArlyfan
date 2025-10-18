import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Navbar } from '../components/organisms/navbar/navbar';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
}
