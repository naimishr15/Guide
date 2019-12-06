/**
 * Player Interface
 */
export interface IPlayer {
  _id?: string;
  name: string;
  rank: number;
  time: string;
  available: boolean | number;
  favouriteGame: string;
  score: number;
}
