import Image from 'next/image';
import './service.css';
import imageService from '../../../public/image-services.jpg';

function Service() {
  return (
    <section className='container-services'>
      <h3>servicos</h3>
      <div className='services'>
        <div className='services-left'>
          <div className='service'>
            <h4>Desenvolvimento de sites</h4>
            <p>
              Sites que impressionam, convertem e fortalecem sua marca.  
             Criamos experiências digitais sob medida, com design moderno, 
              performance impecável e foco em resultados reais.
            </p>
          </div>
            <div className='service'>
              <h4>Desenvolvimento de sistemas</h4>
              <p>
                Sistemas inteligentes, ágeis e feitos sob medida
                para o seu negócio.  Automatize processos, 
              ganhe prdutividade e tenha o controle total da sua operação — tudo online.
                p>
                v>
              v>
            iv className='services-right'>
            <Image
              src='./image-services.jpg'
              width={500}
              height={750}
              alt='Profissional trabalhando'
            />
  </div>
div>
    </section>
  );
}

export { Service }
