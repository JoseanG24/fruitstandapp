import React from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/styles/cart.module.css';

interface CartItem {
  nombre: string;
  precio: number;
  toppings?: string[];
}

interface CartProps {
  cartItems: CartItem[];
  removeFromCart: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.precio, 0);
  const router = useRouter();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      router.push('/pages/checkout');
    }
  }

  return (
    <div className={styles.cart}>
      <h2>Tu Pedido</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <p>{item.nombre} - ${item.precio.toFixed(2)}</p>
            {item.toppings && <p>Toppings: {item.toppings.join(', ')}</p>}
            <button onClick={() => removeFromCart(index)} className={styles.removeButton}>Eliminar</button>
          </div>
        ))
      ) : (
        <p>Aún no has agregado nada a tu pedido.</p>
      )}
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={handleCheckout} disabled={cartItems.length === 0} className={styles.checkoutButton}>Confirmar Orden</button>
    </div>
  );
};

export default Cart;
