
import './brands.css';
import spotify from '../../../public/spotify.svg';
import convo from '../../../public/convo.svg';
import netflix from '../../../public/netflix.svg';
import Image from 'next/image';

function Brands() {
  return (
    <section className='container-brands'>
      <div className='brands'>
        <Image className='brand' src={spotify} width={120} height={60} alt='Spotify' />
        <Image className='brand' src={convo} width={120} height={60} alt='Convo' />
        <Image className='brand' src={netflix} width={120} height={60} alt='Netflix' />
      </div>
    </section>
  );
}

export { Brands }
