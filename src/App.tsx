import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { FilmInfo } from './shared/FilmInfo';
import Billboard, { Film } from './components/Billboard';
import Streaming from './components/Streaming';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import News from './components/News';
import FilmsManageMent from './components/FilmsManagement';


const App: React.FC = () => {
  const [randomFilm, setRandomFilm] = useState<Film | null>(null);
  const location = useLocation();

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    getRandomFilm();
  }, []);

  useEffect(() => {
    // Initialize Materialize parallax component after rendering the component
    const parallaxElems = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElems);
  }, [location]);

  const getRandomFilm = (): void => {
    const randomIndex = Math.floor(Math.random() * FilmInfo.length);
    const film = FilmInfo[randomIndex];
    setRandomFilm(film);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {randomFilm && <Billboard film={randomFilm} />}
              <div className="my-6 lg:my-20 ">
                <MovieList data={FilmInfo} title="All films" />
              </div>
              <div className="parallax-container hidden lg:flex ">
                <div className="parallax">
                  <img src="./images/parralax1.jpg" alt="" />
                </div>
              </div>
              <div className="my-6 lg:my-20">
                <MovieList data={FilmInfo} title="New films" />
              </div>
              <div className="parallax-container hidden lg:flex">
                <div className="parallax">
                  <img src="./images/parralax2.jpg" alt="" />
                </div>
              </div>
            </>
          }
        />
        <Route path="/streaming/:id" element={<div className="py-24 lg:py-24"><Streaming /></div>} />
        <Route path='/news' element={
          <div className='pt-28'>
   
          <News/>
          </div>
        } />
        <Route path='/filmsManagement' element={
        <div className='pt-20'>
        <FilmsManageMent/>
        </div>
        
        }/>
      </Routes>
      <div className='container px-4 pt-28'>

      <iframe src="https://open.spotify.com/embed/album/45A5YR3EFMvAMKiKOOczeE?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      
      <div className="lg:pt-24">
        <Footer />
      </div>
    </>
  );
};

export default App;
