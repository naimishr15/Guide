import { Component, OnInit, Inject } from "@angular/core";
import { IPlayer } from "src/app/core/interface/player";
import { IGame } from "src/app/core/interface/game";
import { GameService } from "src/app/core/services/game/game.service";
import { PlayerService } from "src/app/core/services/player/player.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-admin-players-form",
  templateUrl: "./admin-players-form.component.html",
  styleUrls: ["./admin-players-form.component.scss"]
})
export class AdminPlayersFormComponent implements OnInit {
  /** Player selected */
  player: IPlayer;

  /** Games list */
  gameList: IGame[] = [];

  /** Rank list */
  rankList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  /** Selected Game ID */
  selectedGameId: string = "-1";

  /** show error message */
  showErrorMessage = false;

  /** is Update */
  isUpdate = false;

  /**
   * Angular constructor
   * @param dialogRef
   */
  constructor(
    private gameService: GameService,
    private playerService: PlayerService,
    private dialogRef: MatDialogRef<AdminPlayersFormComponent>,
    @Inject(MAT_DIALOG_DATA) private data: IPlayer
  ) {
    if (data.name) {
      this.player = data;
      this.isUpdate = true;
    } else {
      this.player = {
        name: "",
        rank: undefined,
        score: 0,
        time: "",
        favouriteGame: "-1",
        available: undefined
      };
    }
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
   * Create a new player
   */
  savePlayer(isValid): void {
    if (!isValid) {
      this.showErrorMessage = true;
      return;
    }
    if (this.isUpdate) {
      this.playerService.updatePlayer(this.player).subscribe(() => {
        this.closeDialog();
      });
    } else {
      this.playerService.createPlayer(this.player).subscribe(() => {
        this.closeDialog();
      });
    }
  }

  /**
   * Close dialog
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
}
