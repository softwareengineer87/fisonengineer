
import Image from 'next/image';
import './services.css';
import imageService from '../../../public/image-services.jpg';

function Services() {
  return (
    <section className='container-services' id='services'>
      <h3>Serviços</h3>
      <div className='services container'>
        <div className='services-left'>
          <div className='service'>
            <h4>Desenvolvimento de sites</h4>
            <p>
              Sites que impressionam, convertem e fortalecem sua marca.  
          Criamos experiências digitais sob medida, com design moderno, 
                    performance impecável e foco em resultados reais.
              >
            v>

          <div className='service'>
            <h4>Desenvolvimento de sistemas</h4>
            <p>
              Sistemas inteligentes, ágeis e feitos sob medida
              para o seu negócio.  Automatize processos, ganhe 
              odutividade  tenha o controle total da sua operação — tudo online.
            </p>
          </div>
        </div>

        <div className='services-right'>
         <Image
        src={imageService}
          idth={500}
            height={750}
            alt='Imagem profissional trabalhando'
                 />
                </div>
          
        ion>


    

eport { Services }

