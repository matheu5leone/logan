import style from './card.module.css'

interface CardProps {
    title: string;
    image: string;
    video: string;
  }

export default function Card({ title, image, video }: CardProps) {


    return (
        <div className={style.card}>
          <h2>{title}</h2>
          <img src={image} alt={title} />
          <video controls>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      );
}