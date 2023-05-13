"use client";

import ProfileCard from "@/components/ProfileCard/ProfileCard.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("https://hp-api.onrender.com/api/characters");

  return res.json();
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <main className={styles.main}>
      <Navbar />
      <section className={styles.CardWrapper}>
        {data.map((entry, index) => (
          <ProfileCard key={index} entry={entry} />
        ))}
      </section>
    </main>
  );
}
