import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Fav from './pages/Fav';

import Home from './pages/Home';
import Movie from './pages/Movie';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<Movie />} />
      <Route path='/favoritos' element={<Fav />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default RoutesApp;
