import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import cards from "../data/cards.json";
import Card from "@/components/card/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.grid}>
        {cards.map((card) => (
          <Card 
            key={card.id}
            title={card.title}
            image={card.image}
            video={card.video}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
