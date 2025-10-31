import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Sobre } from "@/components/Sobre";
import { Footer } from "@/components/Footer";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Brands />
      <Sobre />
      <Services />
      <Footer />
    </main>
  );
}
