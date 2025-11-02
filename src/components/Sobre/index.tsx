
import styles from './sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container} id='sobre'>
      <div className={styles.sobre}>
        <h3>Sobre a Fison Engineer</h3>
        <p>
          A <strong>Fison Engineer</strong> tem a missão
          de transformar idéas em soluções por meio da tecnologia,
          com base na necessidade do cliente nós criamos soluções personalizadas
          para atingir o objetivo do cliente.
        </p>
      </div>
    </section>
  );

}

export { Sobre }

