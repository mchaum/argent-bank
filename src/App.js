import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Error404 from './pages/Error404';
import User from './pages/User';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    {/* Chemin vers les pages créées : */}
      <Route path="/" element={<Home />} />
      <Route path='/sign-in' element={<Login />} />
      <Route path='/user-account' element={<User />} />
      {/* Redirection vers une page erreur 404 si l'url ne correspond à rien de connu : */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
)
};

export default App;
