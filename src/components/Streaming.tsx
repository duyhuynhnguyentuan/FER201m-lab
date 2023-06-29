import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineFullscreen } from 'react-icons/ai';

const Streaming: React.FC = () => {
  const { id } = useParams();
  const filmId = parseInt(id!, 10);
  const [film, setFilm] = useState<any>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        const response = await fetch('https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films');
        const data = await response.json();
        const foundFilm = data.find((obj: any) => obj.id === filmId);
        setFilm(foundFilm);
      } catch (error) {
        console.error('Error fetching film data:', error);
      }
    };

    fetchFilmData();
  }, [filmId]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Error playing video:', error);
      });
    }
  }, [film]);

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <div className="container mx-auto px-2">
      <h1 className="text-4xl text-white mb-8">
        <i className="text-zinc-300">You are watching:</i> {film.title}
      </h1>
      <div className="relative">
        <video
          ref={videoRef}
          poster={film.thumbnailUrl}
          className="w-full object-cover transition duration-500"
          controls
        >
          <source src={film.videoUrl} type="video/mp4" />
        </video>
    
      </div>
    </div>
  );
};

export default Streaming;
