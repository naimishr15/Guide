import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { IPlayer } from "../../interface/player";
import { HttpClient } from "@angular/common/http";

/**
 * Player service to
 * GET, CREATE, UPDATE, DELETE players
 */
@Injectable({
  providedIn: "root"
})
export class PlayerService {
  /** Api URL */
  apiUrl: string;

  /**
   * Angular constructor
   */
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  /**
   * Get list of all players
   */
  getAllPlayers(): Observable<IPlayer[]> {
    return this.http.get<IPlayer[]>(`${this.apiUrl}players`);
  }

  /**
   * Create a new player
   * @param player
   */
  createPlayer(player: IPlayer): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}players`, player);
  }

  /**
   * Update the given player
   * @param player
   */
  updatePlayer(player: IPlayer): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}players`, player);
  }

  /**
   * delete given player
   * @param player
   */
  deletePlayer(player: IPlayer): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}players/${player._id}`);
  }
}
