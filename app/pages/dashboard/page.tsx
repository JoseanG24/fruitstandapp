"use client";
import React, { useState } from "react";
import MenuItem from "@/app/components/MenuItem";
import Cart from "@/app/components/Cart";
import styles from "@/app/styles/dashboard.module.css";
import Image from "next/image";

interface MenuItemData {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  toppings?: string[];
}

interface Item {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  toppings?: string[];
}


interface MenuData {
  frutas: MenuItemData[];
  bebidas: MenuItemData[];
  snacks: MenuItemData[];
}

const data: MenuData = {
  frutas: [
    {
      id: 1,
      nombre: "Manzana",
      descripcion:
        "Manzanas frescas y jugosas, perfectas para un snack saludable.",
      precio: 1.5,
    },
    {
      id: 2,
      nombre: "Banana",
      descripcion:
        "Bananas ricas en potasio, ideales para recuperar energías rápidamente.",
      precio: 0.5,
    },
    {
      id: 3,
      nombre: "Naranja",
      descripcion:
        "Naranjas de pulpa jugosa y rica en vitamina C, perfectas para un zumo refrescante o para disfrutar en gajos.",
      precio: 0.75,
    },
    {
      id: 4,
      nombre: "Uvas",
      descripcion:
        "Uvas dulces y crujientes, ideales para un tentempié rápido o para agregar a ensaladas.",
      precio: 2.0,
    },
  ],
  bebidas: [
    {
      id: 1,
      nombre: "Jugo de naranja natural",
      descripcion: "Jugo recién exprimido de naranjas seleccionadas.",
      precio: 2.0,
    },
    {
      id: 2,
      nombre: "Smoothie de frutas mixtas",
      descripcion:
        "Un delicioso y refrescante smoothie hecho con una mezcla de frutas de estación.",
      precio: 3.5,
    },
  ],
  snacks: [
    {
      id: 1,
      nombre: "Barra de granola",
      descripcion:
        "Barra de granola casera, con nueces y miel, sin aditivos artificiales.",
      precio: 1.75,
    },
    {
      id: 2,
      nombre: "Yogurt con frutas",
      descripcion: "Yogurt natural con trozos de frutas frescas.",
      precio: 2.25,
    },
  ],
};

const Dashboard = () => {
  const [cart, setCart] = useState<MenuItemData[]>([]);
  const [isCartVisible, setCartVisible] = useState(false);

  const addToCart = (item: MenuItemData) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemIndex: number) => {
    setCart(cart.filter((_, index) => index !== itemIndex));
  };

  const toggleCartVisibility = () => {
    setCartVisible(!isCartVisible);
  };

  return (
    <div className={styles.dashboard}>
      <Image src="/fruitslogo.png" alt="Frutas Logo" width={90} height={80} />
      <div className={styles.navbar}>
        <h1 className={styles.title}>
          <span className={styles.span2}>Menú</span>
        </h1>
        <div className={styles.imageLinks}>
          <Image className={styles.images} src="/image1.png" alt="Imagen 1" width={110} height={110} />
          <Image className={styles.images} src="/image2.png" alt="Imagen 2" width={110} height={110} />
          <Image className={styles.images} src="/image3.png" alt="Imagen 3" width={110} height={110} />
          <Image className={styles.images} src="/image4.png" alt="Imagen 4" width={110} height={110} />
        </div>
      </div>
      <button
        onClick={toggleCartVisibility}
        className={styles.toggleCartButton}
      >
        {`${isCartVisible ? "Cerrar" : "Pedido"}`}
      </button>
      <div className={styles.menuSection}>
        {Object.keys(data).map((category) => (
          <div key={category}>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            {data[category as keyof MenuData].map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                category={category}
              />
            ))}
          </div>
        ))}
      </div>
      {isCartVisible && (
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default Dashboard;
