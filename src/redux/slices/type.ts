import { ICats } from '../api/catsApiTypes';

export interface IFavorite {
  items: ICats[];
  limit: number;
}
