import React from 'react';
import MovieCard from './MovieCard';

interface Film {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  genre: string;
  duration: string;
}

interface MovieListProps {
  data: Film[];
  title: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2 ">
          {data.map((movie) => (
            <div key={movie.id} className="col-span-1">
              <MovieCard data={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
