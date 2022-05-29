import CatsCard from '../components/CatsCard';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { useGetAllCatsQuery } from '../redux/api/catsApi';
import { ICats } from '../redux/api/catsApiTypes';

const AllCatsPage: React.FC = () => {
  const { limit } = useTypedSelector((state) => state.favoriteReducer);
  const { moreCats } = useActions();
  const { data: cats } = useGetAllCatsQuery(limit);

  return (
    <>
      <div className="flex mt-10 mx-auto w-[1400px] ">
        <div className="flex flex-wrap">
          {cats ? cats.map((cat: ICats) => <CatsCard key={cat.id} {...cat} />) : null}
        </div>
      </div>
      <button className="flex mt-[48px] mb-[31px] mx-auto" onClick={() => moreCats()}>
        Загрузить ещё котиков
      </button>
    </>
  );
};

export default AllCatsPage;
