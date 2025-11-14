import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Sobre } from "@/components/Sobre";
import { Footer } from "@/components/Footer";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Advantages } from "@/components/Advantages";
import { Depoiments } from "@/components/Depoiments";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Brands />
      <Sobre />
      <Services />
      <Advantages />
      <Depoiments />
      <Footer />
    </main>
  );
}
