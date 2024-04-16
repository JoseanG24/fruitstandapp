"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Head from "next/head";
import Image from "next/image";

const Login: React.FC = () => {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "test@unis.edu.gt" && password === "123") {
      router.push("/pages/dashboard");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <Head>
        <title>Iniciar sesión</title>
      </Head>

      <div className={styles.container}>
        <Image
          src="/fruitslogo2.png"
          alt="Logo de la Empresa"
          className={styles.logo}
          width={250}
          height={200}
        />

        <div className={styles.header}>
          <h1 className={styles.title}>¡Bienvenidos!</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          {error && <div className={styles.error}>{error}</div>}

          <div>
            <label className={styles.label}>Usuario</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.inputField}
            />
          </div>

          <div>
            <label className={styles.label}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.inputField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
