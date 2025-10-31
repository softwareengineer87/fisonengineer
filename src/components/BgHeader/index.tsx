import Image from 'next/image';
import Pattern from '../../../public/pattern.webp';
import './bg-header.css';

function BgHeader() {
  return (
    <section className="bg-header">
      <Image
        className='pattern'
        src={Pattern}
        width={1920}
        height={1080}
        alt='Bg Header'
      />
    </section>
  );
}

export { BgHeader }

