// pages/cartpage/page.tsx
import Providers from '@/app/components/Provider';  // Import Providers component
import CartPage from '@/app/components/Cart/CartPage';  // Import your CartPage component

export default function Cart() {
  return (
    <Providers>
      <CartPage />  {/* Wrap CartPage with Providers */}
    </Providers>
  );
}
