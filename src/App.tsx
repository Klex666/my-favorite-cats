import { Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import Header from './components/Headers';
import AllCatsPage from './pages/AllCatsPage';
import FavoriteCatsPage from './pages/FavoriteCatsPage';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const { items } = useTypedSelector((state) => state.favoriteReducer);

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('favorite', json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AllCatsPage />} />
        <Route path="/favorites" element={<FavoriteCatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
