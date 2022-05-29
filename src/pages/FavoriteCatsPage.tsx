import React from 'react';
import CatsCard from '../components/CatsCard';
import { useTypedSelector } from '../hooks/useTypedSelector';

const FavoriteCatsPage: React.FC = () => {
  const { items } = useTypedSelector((state) => state.favoriteReducer);

  return (
    <div className="flex mt-10 mx-auto w-[1400px] flex-wrap">
      {items.map((item) => (
        <CatsCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default FavoriteCatsPage;
