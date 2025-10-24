
import Image from 'next/image';
import styles from './contato.module.css';
import Link from 'next/link';

function Contato() {
  return (
    <section className={styles.container} id='contato'>
      <h3>Entre em contato</h3>
      <div className={styles.contato}>
        <div className={styles.left}>
          <p>Manhattan Business Office - Av. Campos Sales, 901
            - 59020-300. Sala 308 - Petrópolis, Natal - RN, 59020-300 l 84 99104-5880</p>
          <Link
            href='https://wa.me//5584991045880?text=Como%20posso%20ajudar?'
            target='_blank'>
            <span className={styles.whats}>Chame no whatsapp</span>
          </Link>
        </div>
        <div className={styles.right}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.4647792814249!2d-35.202268565730485!3d-5.793830245585423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b30011bb13414b%3A0x58dee1b957cf5c4e!2sManhattan%20Business%20Office%20-%20Av.%20Campos%20Sales%2C%20901%20-%20308%20-%20Petr%C3%B3polis%2C%20Natal%20-%20RN%2C%2059020-300!5e0!3m2!1spt-BR!2sbr!4v1761311341534!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  );
}

export { Contato }

