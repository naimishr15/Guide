import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LobbyHomeComponent } from "./lobby-home/lobby-home.component";
import { RouterModule } from "@angular/router";

import { LobbyJoinGameComponent } from "./lobby-join-game/lobby-join-game.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [LobbyHomeComponent, LobbyJoinGameComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "lobby",
        component: LobbyHomeComponent
      }
    ])
  ],
  entryComponents: [LobbyJoinGameComponent]
})
export class LobbyModule {}
