'use client';

import { IconDentalBroken, IconMenu4, IconNumber100Small, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";
import './header.css';
import Image from "next/image";
import Light1 from '../../../public/ligth-left.svg';
import Light2 from '../../../public/ligth-right.svg';
import code from '../../../public/code-bg.jpg';
import logo from '../../../public/logo.svg';

function Header() {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className='container-header'>
      <Image
        className="code"
        src={code}
        fill
        objectFit="cover"
        quality={100}
        alt="Light"
      />
      <Image
        className="light-left"
        src={Light1}
        width={500}
        height={500}
        alt="Light"
      />
      <Image
        className="light-right"
        src={Light2}
        width={500}
        height={500}
        alt="Light"
      />
      <div className='header'>
        <div className="box-menu">
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
          <section className='menu'>
            <span
              onClick={() => setOpen(state => !state)}
              className='icon-menu'>
              <IconMenu4 />
            </span>
            <nav className={open ? 'open-menu' : 'links'}>
              <ul className='menu-links'>
                <span
                  onClick={() => setOpen(false)}
                  className='icon-close'>
                  <IconX size={20} />
                </span>
                <li className='link'><Link href='#sobre'><span>Sobre</span></Link></li>
                <li className='link'><Link href='#servicos'><span>Serviços</span></Link></li>
                <li className='link'><Link href='#trabalhos'><span>Trabalhos</span></Link></li>
                <li className='link'><Link href='#contato'><span>Contato</span></Link></li>
              </ul>
            </nav>
          </section>
        </div>
        <div className="box-hero">
          <div className="title">
            <h1>Soluções criativas <br /> para o seu negócio crescer</h1>
          </div>
          <p>Com uma abordagem única de design, marketing e tecnologia,
            ajudamos empresas a se destacar no mercado digital.</p>

          <Link href='#' className="whats">Soilicitar  orçamento</Link>
        </div>
      </div>
    </header>
  );
}

export { Header }

