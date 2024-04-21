import React from "react";
import styles from "@/app/styles/info.module.css";
import Link from "next/link";

const InfoPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Descubre el impacto que puede tener una dieta saludable en tu vida
        </h1>
      </header>

      <main>
        <Link href="/pages/dashboard">
          <button className={styles.backButton}>Regresar al menú</button>
        </Link>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>¿Cómo Funciona Nuestra App?</h2>
          <p className={styles.paragraph}>
            Nuestra aplicación te permite fácilmente explorar y pedir una amplia
            variedad de frutas frescas y snacks saludables con un día de
            anticipación y al día siguiente serán entregados directamente a tu
            ubicación en el campus.
          </p>
          <p className={styles.paragraph}>
            Realiza pedidos desde cualquier lugar con solo unos cuantos clics,
            ¡Comer saludable nunca ha sido tan fácil!
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Salud Física</h2>
          <p className={styles.paragraph}>
            Las frutas contienen azúcares naturales como la fructosa, que
            proporcionan una fuente de energía más estable comparada con los
            azúcares refinados. Esto es esencial para los estudiantes que
            necesitan mantenerse energizados para estudiar, asistir a clases y
            participar en actividades extracurriculares.
          </p>
          <p className={styles.paragraph}>
            Varias frutas son ricas en vitaminas C y E, zinc y otros
            antioxidantes que ayudan a fortalecer el sistema inmunológico,
            crucial para evitar enfermedades, especialmente en ambientes
            universitarios.
          </p>
          <p className={styles.paragraph}>
            La fibra presente en las frutas es vital para mantener un sistema
            digestivo saludable, previniendo problemas como el estreñimiento y
            promoviendo una flora intestinal saludable, esencial para la
            absorción eficiente de nutrientes.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Bienestar Mental</h2>
          <p className={styles.paragraph}>
            El plátano contiene triptófano, que el cuerpo convierte en
            serotonina, conocida como la hormona de la felicidad, lo cual puede
            ayudar a mejorar el estado de ánimo y combatir la depresión y la
            ansiedad.
          </p>
          <p className={styles.paragraph}>
            Las frutas ricas en vitamina C, como las naranjas y fresas, pueden
            ayudar a reducir los niveles de estrés. La vitamina C ha sido
            relacionada con una reducción en los niveles de cortisol, la hormona
            del estrés.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Rendimiento Académico</h2>
          <p className={styles.paragraph}>
            Las frutas pueden mejorar la concentración y la memoria gracias a su
            contenido de antioxidantes, como los flavonoides, que han demostrado
            tener efectos positivos en las funciones cerebrales.
          </p>
          <p className={styles.paragraph}>
            El consumo regular de frutas puede ayudar a prevenir el declive
            cognitivo. Estudios sugieren que los antioxidantes en las frutas
            pueden proteger las células cerebrales del daño oxidativo,
            manteniendo una función cerebral óptima.
          </p>
        </section>
      </main>
    </div>
  );
};

export default InfoPage;
