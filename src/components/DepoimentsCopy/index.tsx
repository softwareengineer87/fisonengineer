'use client';

import {
  IconQuotes,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';
import './depoiments.css';
import { useEffect, useState } from 'react';

function DepoimentsCopy() {

  const [next, setNext] = useState<boolean>(false);
  let i = 0;

  function nextSlide() {
    const depoiments = document.querySelectorAll('.depoiment');
    depoiments[0].classList.add('next');
    if (depoiments[i].classList.contains('next')) {
      depoiments[i].classList.remove('next');
    } else {
      depoiments[i].classList.add('next');
    }
    i++;
    if (i === depoiments.length - 1) {
      i = 0;
    }
    console.log(depoiments[i]);
  }

  function prevSlide() {
    const depoiments = document.querySelectorAll('.depoiment');
    depoiments[0].classList.add('next');
    if (depoiments[i].classList.contains('next')) {
      depoiments[i].classList.remove('next');
    } else {
      depoiments[i].classList.add('next');
    }
    i++;
    if (i === depoiments.length - 1) {
      i = 0;
    }
    console.log(depoiments[i]);
  }

  return (
    <section className='container-depoiments' id='depoimentos'>
      <h3>Resultados dos nossos clientes</h3>
      <div className='depoiments container'>
        <span
          className='arrow'
          onClick={prevSlide}
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
          className='arrow'
          onClick={nextSlide}
        >
          <IconChevronRight size={30} />
        </span>
      </div>
    </section>
  );
}

export { DepoimentsCopy }

