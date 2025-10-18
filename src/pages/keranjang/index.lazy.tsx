import { createLazyFileRoute } from '@tanstack/react-router'
import { CartPage } from '@/components/molecules/CartPage/cartpage'


export const Route = createLazyFileRoute('/keranjang/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <CartPage />
}
