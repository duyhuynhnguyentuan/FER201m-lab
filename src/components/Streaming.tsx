import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FilmInfo } from "../shared/FilmInfo";
import { AiOutlinePlayCircle, AiOutlinePauseCircle, AiOutlineFullscreen } from "react-icons/ai";

const Streaming: React.FC = () => {
  const { id } = useParams();
  const filmId = parseInt(id!, 10);
  const film = FilmInfo.find((obj) => obj.id === filmId);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = currentTime;
    }
  }, [currentTime]);

  if (!film) {
    return <div>Film not found</div>;
  }

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const seekTime = parseFloat(e.target.value);
      setCurrentTime(seekTime);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

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
          autoPlay
          onClick={isPlaying ? handlePause : handlePlay}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={film.videoUrl} type="video/mp4" />
        </video>
        <div className="absolute bottom-0 left-0 w-full bg-gray-900 bg-opacity-75 flex items-center px-4 py-2">
          {isPlaying ? (
            <button className="text-white" onClick={handlePause}>
              <AiOutlinePauseCircle className="h-6 w-6" />
            </button>
          ) : (
            <button className="text-white" onClick={handlePlay}>
              <AiOutlinePlayCircle className="h-6 w-6" />
            </button>
          )}
          <input
            type="range"
            className="ml-4 flex-grow h-2 rounded-lg bg-white"
            min={0}
            max={videoRef.current?.duration || 0}
            value={currentTime}
            step={0.01}
            onChange={handleSeek}
          />
          <button className="text-white ml-4" onClick={handleFullscreen}>
            <AiOutlineFullscreen className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Streaming;
