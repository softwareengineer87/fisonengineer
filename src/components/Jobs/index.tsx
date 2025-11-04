
import { CardJob } from '../CardJob';
import portfolio from '../../../public/portfolio.webp';
import './jobs.css';

function Jobs() {
  return (
    <section className='container-jobs'>
      <h3>Trabalhos criados</h3>
      <div className='jobs container'>
        <CardJob
          image={portfolio}
          title='Portfolio'
          link='#'
        />
        <CardJob
          image={portfolio}
          title='Portfolio'
          link='#'
        />
        <CardJob
          image={portfolio}
          title='Portfolio'
          link='#'
        />
        <CardJob
          image={portfolio}
          title='Sistema financeiro'
          link='#'
        />
        <CardJob
          image={portfolio}
          title='Sistema de agendamentos'
          link='#'
        />
      </div>
    </section>
  );
}

export { Jobs }

