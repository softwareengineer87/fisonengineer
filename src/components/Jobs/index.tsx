
import { CardJob } from '../CardJob';
import portfolio from '../../../public/portfolio.webp';
import ffinance from '../../../public/ffinance.png';
import studio from '../../../public/studio.webp';
import './jobs.css';

function Jobs() {
  return (
    <section className='container-jobs' id='trabalhos'>
      <h3>Trabalhos criados</h3>
      <div className='jobs container'>
        <CardJob
          image={portfolio}
          title='Site agência'
          link='#'
        />
        <CardJob
          image={ffinance}
          title='Sistema financeiro'
          link='#'
        />
        <CardJob
          image={studio}
          title='Lavinia studio site'
          link='https://laviniastudio.vercel.app/'
        />
      </div>
    </section>
  );
}

export { Jobs }

