import Link from 'next/link';
import styles from './footer.module.css';
import { IconDentalBroken, IconCopyright } from '@tabler/icons-react';

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.left}>
          <Link href='/'>
            <h2 className={styles.logo}>Dra. Laura<IconDentalBroken />Bastos</h2>
          </Link>
        </div>
        <div className={styles.right}>
          <p>Todos os direitos<IconCopyright /> Dra. Laura Bastos.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer }
