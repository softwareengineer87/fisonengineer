
import Link from 'next/link';
import './hero.css';

function Hero() {
  return (
    <section className='container-hero'>
      <div className='hero'>
        <div className='left'>
          <h1>Dra. Laura Bastos Cirurgiã-Dentista em Natal</h1>
          <Link
            href='https://wa.me//5584991045880?text=Como%20posso%20ajudar?'
            target='_blank'>
            <span className=''>Chame no whatsapp</span>
          </Link>
        </div>
        <div className='right'>
        </div>
      </div>
    </section>
  );
}

export { Hero }

