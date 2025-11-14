import Link from 'next/link';
import { IconCopyright } from '@tabler/icons-react';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import './footer.css';

function Footer() {
  return (
    <footer className='container-footer'>
      <div className='footer container'>
        <Link href='#' className="whats">Soilicitar  orçamento</Link>
        <div className='footer-left'>
          <section className="logo">
            <Link href='/'>
              <Image
                src={logo}
                width={150}
                height={50}
                objectFit="cover"
                alt="logotipo fison engineer"
              />
            </Link>
          </section>
          <p>Todos os direitos<IconCopyright /> Fison Engineer.</p>
        </div>
      </div>
    </footer>
  );
}

export { Footer }
