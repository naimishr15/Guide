import { Component, OnInit } from "@angular/core";
import { IPlayer } from "src/app/core/interface/player";
import { PlayerService } from "src/app/core/services/player/player.service";
import { PLAYER_COLUMN } from "../../app.constant";
import { MatDialog } from "@angular/material/dialog";
import { LobbyJoinGameComponent } from "../lobby-join-game/lobby-join-game.component";
import { IGame } from "src/app/core/interface/game";
import { GameService } from "src/app/core/services/game/game.service";

@Component({
  selector: "app-lobby-home",
  templateUrl: "./lobby-home.component.html",
  styleUrls: ["./lobby-home.component.scss"]
})
export class LobbyHomeComponent implements OnInit {
  /** Players list */
  playerList: IPlayer[] = [];

  /** Game list */
  gameList: IGame[] = [];

  /** Original list */
  originalList: IPlayer[] = [];

  /** Columns to display in the table */
  displayedColumns: string[] = PLAYER_COLUMN;

  /** Is data loading */
  isLoading = false;

  /**
   * Angular constructor to initialize
   * components
   */
  constructor(
    private playerService: PlayerService,
    private gameService: GameService,
    private dialog: MatDialog
  ) {}

  /**
   * Angular lifecycle hook
   */
  ngOnInit(): void {
    this.getPlayersData();
    this.gameService.getAllGames().subscribe(list => {
      this.gameList = list;
    });
  }

  /**
   * Get players data
   */
  getPlayersData(): void {
    this.isLoading = true;
    this.playerList = [];
    this.playerService.getAllPlayers().subscribe(list => {
      list.sort((a, b) => (a.rank < b.rank ? -1 : 1));
      this.playerList = this.originalList = list;
      this.isLoading = false;
    });
  }

  /**
   * Get Game Name from Id
   * @param id
   */
  getGameName(id: string): string {
    const found = this.gameList.filter(game => game._id == id);
    return found.length > 0 ? found[0].title : "";
  }

  /**
   * On search of player
   */
  onSearch(term: string): void {
    this.playerList = this.originalList.filter(player => {
      return player.name.toLowerCase().indexOf(term.toLowerCase()) != -1;
    });
  }

  /**
   * Open dialog to join game
   */
  openDialog(player: IPlayer): void {
    const dialogRef = this.dialog.open(LobbyJoinGameComponent, {
      width: "650px",
      data: player
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getPlayersData();
    });
  }
}
