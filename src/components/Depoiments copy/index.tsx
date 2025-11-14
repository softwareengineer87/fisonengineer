'use client';

import {
  IconQuotes,
  IconChevronLeft,
  IconChevronRight
} from '@tabler/icons-react';
import './depoiments.css';
import { useState } from 'react';

function Depoiments() {

  const [active, setActive] = useState<string>('dep1');

  function changeDepoiment(dep: string) {
    setActive(dep);
  }

  function renderDepoiment() {
    switch (active) {
      case 'dep1':
        return (
          <div className='depoiment'>
            <h5>Ligia advogada</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
        );
      case 'dep2':
        return (
          <div className='depoiment'>
            <h5>Clinica aurora</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
        );
    }
  }

  return (
    <section className='container-depoiments' id='depoimentos'>
      <h3>Resultados dos nossos clientes</h3>
      <div className='depoiments container'>
        <span className='arrow'><IconChevronLeft size={30} /></span>
        <div className='box-depoiments'>
          <div className='depoiment'>
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
            <h5>Ligia advogada</h5>
            <p>
              <IconQuotes size={20} stroke={.5} />
              A fison criou um site profissional e rapido
              para o meu negocio.
              <span><IconQuotes size={20} stroke={.5} /></span>
            </p>
          </div>
        </div>
        <span className='arrow'><IconChevronRight size={30} /></span>
      </div>
    </section>
  );
}

export { Depoiments }

