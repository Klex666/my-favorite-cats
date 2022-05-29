import { Routes, Route } from 'react-router-dom';

import Header from './components/Headers';
import AllCatsPage from './pages/AllCatsPage';
import FavoriteCatsPage from './pages/FavoriteCatsPage';

function App() {
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
