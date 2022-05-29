import React from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { ICats } from '../redux/api/catsApiTypes';

const CatsCard: React.FC<ICats> = ({ id, url }) => {
  const { addCats } = useActions();
  const { removeCat } = useActions();
  const { items } = useTypedSelector((state) => state.favoriteReducer);

  const item = {
    id,
    url,
  };

  const selected = items.some((i) => i.id === id);

  return (
    <div className="flex mt-[52px] w-[225px] h-[225px] ml-[48px] hover:scale-[1.1]">
      <img src={url} alt="Cats" width={225} height={225} className="flex" />
      {selected ? (
        <img
          src="./CatsCard/favorite-2.svg"
          alt="Favorite"
          className="z-100 absolute pl-44 pt-44  cursor-pointer"
          onClick={() => removeCat(id)}
        />
      ) : (
        <img
          src="./CatsCard/favorite-1.svg"
          alt="Favorite"
          className="z-100 absolute pl-44 pt-44 cursor-pointer"
          onClick={() => addCats(item)}
        />
      )}
    </div>
  );
};

export default CatsCard;
