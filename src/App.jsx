import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Favorites from './pages/Favorites';
import AccountList from './pages/AccountList';


function App() {

  const [morktTema, setMorktTema] = useState(false);
  const [favoriter, setFavoriter] = useState([]);

  // Funktion för att växla tema
  const andraTema = () => {
    const newTheme = !morktTema;
    setMorktTema(newTheme);
    document.body.className = newTheme ? "morkt" : "ljust";
  };

  // Funktion för att lägga till artikel till favoriter
  const addFavorite = (article) => {
    if (!favoriter.some(fav => fav.url === article.url)) {
      setFavoriter([...favoriter, article]);
    }
  };

  // Funktion för att ta bort artikel från favoriter (om du vill implementera det)
  const removeFavorite = (articleUrl) => {
    setFavoriter(favoriter.filter(fav => fav.url !== articleUrl));
  };

  return (
    <>
      <h1>Spelportalen</h1>
      <Navbar toggleTheme={andraTema} morktTema={morktTema} />
      <Routes>
        {/* Passera addFavorite to HomePage */}
        <Route path='/' element={ <HomePage addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          favoriter={favoriter} /> } />
        {/* Passera favoriter till Favorites */}
        <Route path="/favorite" element={ <Favorites favoriter={favoriter} /> } />

        <Route path="/accounts" element={<AccountList />} />

      </Routes>
    </>
  )
}

export default App;
