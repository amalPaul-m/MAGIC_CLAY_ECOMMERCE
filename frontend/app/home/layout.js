import { CartProvider } from "@/context/cartContext";
import { ProductProvider } from "@/context/productContext";
import { UsersProvider } from "@/context/usersContext";
import AuthGuard from "@/components/auth.js";

export default function RootLayout({ children }) {
  return (
    <AuthGuard>
    <ProductProvider>
      <CartProvider>
        <UsersProvider>
          {children}
        </UsersProvider>
      </CartProvider>
    </ProductProvider>
    </AuthGuard>
  );
}
