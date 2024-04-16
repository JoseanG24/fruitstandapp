"use client"
import React, { useState, FC } from 'react';
import styles from '@/app/styles/menu.module.css';

interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  toppings?: string[];
}

const toppingsOptions = ["Nueces", "Miel", "Chocolate", "Fresas", "Plátano"];


interface Item {
  nombre: string;
  descripcion: string;
  precio: number;
}


interface MenuItemProps {
  item: Item;
  addToCart: (item: Item & { toppings: string[] }) => void;
  category: string;
}

const MenuItem: FC<MenuItemProps> = ({ item, addToCart, category }) => {
  const [toppings, setToppings] = useState<string[]>([]);

  const handleToppingChange = (topping: string) => {
    if (toppings.includes(topping)) {
      setToppings(toppings.filter(t => t !== topping));
    } else {
      setToppings([...toppings, topping]);
    }
  };

  return (
    <div className={styles.menuItem}>
      <h3>{item.nombre}</h3>
      <p>{item.descripcion}</p>
      <p>Precio: ${item.precio.toFixed(2)}</p>
      <button className={styles.formButton} onClick={() => addToCart({...item, toppings})}>Añadir a pedido</button>
      {category === 'snacks' && (
        <div className={styles.toppingsForm}>
          {toppingsOptions.map(topping => (
            <label key={topping}>
              <input
                type="checkbox"
                checked={toppings.includes(topping)}
                onChange={() => handleToppingChange(topping)}
              />
              {topping}
            </label>
          ))}
          <button className={styles.formButton} onClick={() => addToCart({...item, toppings})}>Añadir pedido con Toppings</button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
