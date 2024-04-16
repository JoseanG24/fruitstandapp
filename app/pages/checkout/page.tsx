"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/styles/checkout.module.css";

const Checkout = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleCashPayment = () => {
    setShowPopup(true);
  };

  const handleReturnToDashboard = () => {
    router.push("/pages/dashboard");
  };

  return (
    <div className={styles.checkout}>
      {showPopup && <div className={styles.overlay}></div>}
      <div className={styles.header}>
        <Image src="/fruitslogo.png" alt="Logo" width={100} height={100} />
      </div>
      <h1>Finaliza tu pedido</h1>
      <div className={styles.paymentOptions}>
        <div className={styles.button} onClick={() => console.log("Pagar con tarjeta")}>
          <div className={styles.button2}>
            Pagar con tarjeta
          </div>
          <Image
            src="/credit-card_icon-icons.com_64588.png"
            alt="credit card"
            height={100}
            width={100}
          />
        </div>
        <div className={styles.button} onClick={handleCashPayment}>
          <div className={styles.button2}>
            Pagar en efectivo
          </div>
          <Image
            src="/mbricash_99554.png"
            alt="cash"
            height={100}
            width={100}
          />
        </div>
      </div>
      <button onClick={handleBack} className={styles.backButton}>
        Regresar
      </button>
      {showPopup && (
        <div className={styles.popup}>
          <p>¡Listo puedes ir por tu pedido!</p>
          <button onClick={handleReturnToDashboard} className={styles.popupbutton}>
            Regresar al Menú
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
