import { Component, OnInit } from "@angular/core";
import { IGame } from "src/app/core/interface/game";
import { GameService } from "src/app/core/services/game/game.service";
import { GAME_COLUMN } from "../../app.constant";

@Component({
  selector: "app-admin-games",
  templateUrl: "./admin-games.component.html",
  styleUrls: ["./admin-games.component.scss"]
})
export class AdminGamesComponent implements OnInit {
  /** Games list */
  gameList: IGame[] = [];

  /** Games list */
  originalList: IGame[] = [];

  /** Columns to display in the table */
  displayedColumns: string[] = GAME_COLUMN;

  /** IS data loading */
  isLoading = false;

  /**
   * Angular constructor to initialize
   * components
   */
  constructor(private gameService: GameService) {}

  /**
   * Angular lifecycle hook
   */
  ngOnInit(): void {
    this.isLoading = true;
    this.gameService.getAllGames().subscribe(list => {
      this.gameList = this.originalList = list;
      this.isLoading = false;
    });
  }

  /**
   * On search of game
   */
  onSearch(term: string): void {
    this.gameList = this.originalList.filter(game => {
      return game.title.toLowerCase().indexOf(term.toLowerCase()) != -1;
    });
  }
}
