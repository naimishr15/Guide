import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IGame } from "../../interface/game";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GameService {
  /** Api URL */
  apiUrl: string;

  /**
   * Angular constructor
   */
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  /**
   * Get list of all games
   */
  getAllGames(): Observable<IGame[]> {
    return this.http.get<IGame[]>(`${this.apiUrl}games`);
  }
}
