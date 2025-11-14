import Image from "next/image";
import Link from "next/link";
import './card-job.css';

interface CardJobProps {
  image: any;
  title: string;
  link: string;
}


function CardJob({
  image,
  title,
  link
}: CardJobProps
) {
  return (
    <section className="container-cardjob">
      <div className="card-job">
        <Image
          src={image}
          width={1432}
          height={817}
          alt="Site de portfolio FisonEngineer"
          className="image"
        />
        <div className="infos">
          <h3>{title}</h3>
          <Link
            href={link}
            target="_blank"
            className="btn-card"
          >
            Ver site
          </Link>

        </div>
      </div>
    </section>
  );
}

export { CardJob }

