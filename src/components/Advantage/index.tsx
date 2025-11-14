
import './advantage.css';

interface AdantageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Advantage({
  title,
  description,
  icon
}: AdantageProps) {
  return (
    <section className='advantage'>
      <div className='tab'>
        <h4>{title}</h4>
        <p>{description}</p>
        <span className='icon'>{icon}</span>
      </div>
    </section>
  );
}

export { Advantage }

