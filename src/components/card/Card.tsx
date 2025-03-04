import { useState } from "react";
import style from "./card.module.css";

interface CardProps {
  title: string;
  image: string;
  description: string;
  videoUrl: string;
}

export default function Card({ title, image, videoUrl, description }: CardProps) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={style.container}>
      <div
        className={style.card}
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => setShowVideo(true)}
      >
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>

      {showVideo && (
        <div className={style.overlay} onClick={() => setShowVideo(false)}>
          <div className={style.videoContainer}>
            <iframe
              src={`${videoUrl}?autoplay=1`} 
              allow="autoplay; fullscreen"
              allowFullScreen
              className={style.videoFrame}
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
