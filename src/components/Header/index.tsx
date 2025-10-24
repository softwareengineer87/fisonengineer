'use client';

import { IconDentalBroken, IconMenu4, IconX } from "@tabler/icons-react";
import Link from "next/link";
import styles from './header.module.css';
import { useState } from "react";

function Header() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <section className="logo">
          <Link href='/'>
            <h2 className={styles.logo}>Dra. Laura<IconDentalBroken />Bastos</h2>
          </Link>
        </section>
        <section className={styles.menu}>
          <span
            onClick={() => setOpen(state => !state)}
            className={styles.icon_menu}>
            <IconMenu4 />
          </span>
          <nav className={open ? styles.open_menu : styles.links}>
            <ul className={styles.menu_links}>
              <span
                onClick={() => setOpen(false)}
                className={styles.icon_close}>
                <IconX size={20} />
              </span>
              <li className={styles.link}><Link href='#sobre'><span>Sobre</span></Link></li>
              <li className={styles.link}><Link href='#trabalhos'><span>Trabalhos</span></Link></li>
              <li className={styles.link}><Link href='#depoimentos'><span>Depoimentos</span></Link></li>
              <li className={styles.link}><Link href='#contato'><span>Contato</span></Link></li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
}

export { Header }

