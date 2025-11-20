'use client';

import {
  IconQuotes,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';
import './depoiments.css';
import { useRef } from 'react';

function renderDepoiment(title: string, description: string) {
  return (
    <div className='depoiment'>
      <h5>{title}</h5>
      <p>
        <IconQuotes size={20} stroke={.5} />
        {description}
        <span><IconQuotes size={20} stroke={.5} /></span>
      </p>
    </div>
  );
}
const depoiments = document.querySelectorAll('.depoiment');

function DepoimentsCopy() {

  let currentIndex = 0;


  const arrowLeft = useRef(null);
  const arrowRight = useRef(null);

  const arrows = [arrowLeft.current, arrowRight.current];

  arrows.forEach((arrow, index) => {
    const lenDepoiments = depoiments.length - 1;
    if (arrow !== null) {
      arrow.addEventListener('click', () => {
        if (index === 0) {
          currentIndex--;
          if (currentIndex < 0) {
            currentIndex = lenDepoiments;
          }
        } else {
          currentIndex++;
          if (currentIndex > lenDepoiments) {
            currentIndex = 0;
          }
        }
        depoiments[currentIndex].scrollIntoView({
          behavior: "smooth",
          inline: "center"
        });
        console.log(currentIndex);
      });

    }

  });

  return (
    <section className='container-depoiments' id='depoimentos'>
      <h3>Resultados dos nossos clientes</h3>
      <div className='depoiments container'>
        <span
          className='arrow arrow-left'
          ref={arrowLeft}
        >
          <IconChevronLeft size={30} />
        </span>
        <div className='box-depoiments'>
          <div className={`depoiment`}>
            <h5>Ligia advogada</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
          <div className='depoiment'>
            <h5>Clinica Lobo</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
          <div className='depoiment'>
            <h5>Anna</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
          <div className='depoiment'>
            <h5>Advocacia cardoso</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
          <div className='depoiment'>
            <h5>Contabilidade</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
        </div>
        <span
          className='arrow arrow-right'
          ref={arrowRight}
        >
          <IconChevronRight size={30} />
        </span>
      </div>
    </section>
  );
}

export { DepoimentsCopy }

