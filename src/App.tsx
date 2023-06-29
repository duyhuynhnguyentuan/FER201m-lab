import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Billboard, { Film } from './components/Billboard';
import Streaming from './components/Streaming';
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import News from './components/News';
import FilmsManageMent from './components/FilmsManagement';

const App: React.FC = () => {
  const [APIdata, setAPIdata] = useState<Film[]>([]);
  const [randomFilm, setRandomFilm] = useState<Film | null>(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64914f782f2c7ee6c2c7fcd7.mockapi.io/Films');
        if (!response.ok) {
          throw new Error(`HTTP Status: ${response.status}`);
        }
        const data = await response.json();
        setAPIdata(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    M.AutoInit();
  }, []);

  useEffect(() => {
    getRandomFilm();
  }, [APIdata]);

  useEffect(() => {
    // Initialize Materialize parallax component after rendering the component
    const parallaxElems = document.querySelectorAll('.parallax');
    M.Parallax.init(parallaxElems);
  }, [location]);

  const getRandomFilm = (): void => {
    if (APIdata.length > 0) {
      const randomIndex = Math.floor(Math.random() * APIdata.length);
      const film = APIdata[randomIndex];
      setRandomFilm(film);
    }
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
                <MovieList data={APIdata} title="All films" />
              </div>
              <div className="parallax-container hidden lg:flex ">
                <div className="parallax">
                  <img src="./images/parralax1.jpg" alt="" />
                </div>
              </div>
              <div className="my-6 lg:my-20">
                <MovieList data={APIdata} title="New films" />
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
      <div className="lg:pt-24">
        <Footer />
      </div>
    </>
  );
};

export default App;
