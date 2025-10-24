
import Image from 'next/image';
import styles from './sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container} id='sobre'>
      <div className={styles.sobre}>
        <h3>Sobre a Dra. Laura</h3>
        <p>
          A Dra. Laura Bastos é Cirurgiã-Dentista formada pela
          Universidade Federal do Rio Grande do Norte (UFRN).
          Atua com ênfase em endodontia, implantodontia, reabilitação
          oral e clínica geral. Seu atendimento é pautado na
          excelência técnica, no acolhimento e na empatia, com base
          em evidências científicas atualizadas. Seu compromisso é oferecer
          uma experiência odontológica segura, confortável e personalizada para cada paciente.
        </p>
      </div>
    </section>
  );
}

export { Sobre }

