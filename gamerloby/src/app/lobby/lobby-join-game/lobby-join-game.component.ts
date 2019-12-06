import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IPlayer } from "src/app/core/interface/player";
import { IGame } from "src/app/core/interface/game";
import { GameService } from "src/app/core/services/game/game.service";
import { PlayerService } from "src/app/core/services/player/player.service";

@Component({
  selector: "app-lobby-join-game",
  templateUrl: "./lobby-join-game.component.html",
  styleUrls: ["./lobby-join-game.component.scss"]
})
export class LobbyJoinGameComponent implements OnInit {
  /** Player selected */
  player: IPlayer;

  /** Games list */
  gameList: IGame[] = [];

  /** Selected Game ID */
  selectedGameId: string = "-1";

  /** show error message */
  showErrorMessage = false;

  /**
   * Angular constructor
   * @param dialogRef
   */
  constructor(
    private gameService: GameService,
    private playerService: PlayerService,
    private dialogRef: MatDialogRef<LobbyJoinGameComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IPlayer
  ) {
    this.player = data;
  }

  /**
   * Angular lifecycle hook
   */
  ngOnInit(): void {
    this.gameService.getAllGames().subscribe(list => {
      this.gameList = list;
    });
  }

  /**
   * Game the given game
   */
  joinGame(): void {
    if (!this.selectedGameId || this.selectedGameId == "-1") {
      this.showErrorMessage = true;
      return;
    }
    this.player.available = false;
    this.playerService.updatePlayer(this.player).subscribe(() => {
      this.closeDialog();
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
   * Close dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
