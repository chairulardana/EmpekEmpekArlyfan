import { CartSidebar } from "./components/organisms/CartSidebar/cartsidebar";
import { CartProvider } from "./contexts/CartContext";
import Router from "./Router";

function App() {
  return (
    <CartProvider>
    <Router />
    <CartSidebar />
    </CartProvider>
    
  );
}

export default App;