
import Image from 'next/image';
import styles from './hero.module.css';
import Laura from '../../../public/laura.png';
import Link from 'next/link';

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>Dra. Laura Bastos Cirurgiã-Dentista em Natal</h1>
          <Link
            href='https://wa.me//5584991045880?text=Como%20posso%20ajudar?'
            target='_blank'>
            <span className={styles.whats}>Chame no whatsapp</span>
          </Link>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.image}
            src={Laura}
            width={500}
            height={500}
            alt='Dra Laura'
          />
        </div>
      </div>
    </section>
  );
}

export { Hero }

