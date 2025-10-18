
import { createRouter, ErrorComponent, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";


const router = createRouter({
  routeTree,
  defaultComponent: () => <div>Loading...</div>,
  defaultErrorComponent: ({ error }: { error: unknown }) => <ErrorComponent error={error} />,

});



export default function Router() {
  return <RouterProvider router={router} />;
}
