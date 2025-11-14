'use client';

import {
  IconColorPicker,
  IconDashboard,
  IconUsers
} from '@tabler/icons-react';
import './advantages.css';
import { useState } from 'react';
import { Advantage } from '../Advantage';

function Advantages() {

  const [active, setActive] = useState<string>('tab1');

  function changeTab(tabName: string) {
    setActive(tabName);
  }

  function renderAdvantage() {
    switch (active) {
      case 'tab1':
        return <Advantage
          title='Mais visibilidade e novos clientes'
          description={`
            Com um site profissional, sua empresa aparece 
            nos resultados do Google e transmite credibilidade 
            instantânea. Assim, você atrai novos clientes 
            todos os dias — mesmo enquanto dorme.
          `}
          icon={<IconUsers stroke={.5} size={50} />}
        />
      case 'tab2':
        return <Advantage
          title='Performance e tecnologia de ponta'
          description={`
            Desenvolvemos sites rápidos, seguros e totalmente 
            responsivos. Isso significa uma experiência perfeita 
            em qualquer dispositivo e mais chances de conversão.
          `}
          icon={<IconDashboard stroke={.5} size={50} />}
        />
      case 'tab3':
        return <Advantage
          title='Personalização que reflete sua marca'
          description={`
            Cada projeto é feito sob medida, com design 
            e estratégia pensados para o seu público. 
            Seu site se torna uma verdadeira extensão 
            da sua identidade e diferencia você da concorrência.
          `}
          icon={<IconColorPicker stroke={.5} size={50} />}
        />
    }
  }

  return (
    <section className='container-advantages'>
      <div className='advantages container'>
        <h3>Vantagens ao desenvolver seu site</h3>
        <div className='buttons'>
          <button
            onClick={() => changeTab('tab1')}
            className={`btn-tab ${active === 'tab1' ? 'active' : ''}`}
          >
            Mais visibilidade e novos clientes
          </button>
          <button
            onClick={() => changeTab('tab2')}
            className={`btn-tab ${active === 'tab2' ? 'active' : ''}`}
          >
            Tecnologia de Ponta e Alta Performance
          </button>
          <button
            onClick={() => changeTab('tab3')}
            className={`btn-tab ${active === 'tab3' ? 'active' : ''}`}
          >
            Personalização que reflete sua marca
          </button>
        </div>
        <div className='tabs'>
          {renderAdvantage()}
        </div>
      </div>
    </section>
  );
}

export { Advantages }

