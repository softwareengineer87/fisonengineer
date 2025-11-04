
import Image from 'next/image';
import './services.css';
import imageService from '../../../public/image-services.jpg';
import { Jobs } from '../Jobs';

function Services() {
  return (
    <section className='container-services' id='servicos'>
      <h3>Serviços</h3>
      <div className='services container'>
        <div className='services-left'>
          <div className='service'>
            <h4>Desenvolvimento de sites</h4>
            <p>
              Sites que impressionam, convertem e fortalecem sua marca.
              Criamos experiências digitais sob medida, com design moderno,
              performance impecável e foco em resultados reais.
            </p>
          </div>
          <div className='line'></div>
          <div className='service'>
            <h4>Desenvolvimento de sistemas</h4>
            <p>
              Sistemas inteligentes, ágeis e feitos sob medida
              para o seu negócio. Automatize processos,
              ganhe prdutividade e tenha o controle total da sua operação — tudo online.
            </p>
          </div>
        </div>
        <div className='services-right'>
          <Image
            src={imageService}
            width={500}
            height={750}
            alt='Profissional trabalhando'
            className='image-service'
          />
        </div>
      </div>
      <Jobs />
    </section>
  );
}

export { Services }

