/**
 * Game Interface
 */
export interface IGame {
  _id: string;
  title: string;
  platform: string;
  genre: string;
  rating: number;
  publisher: string;
  release: number;
  status: string;
}
