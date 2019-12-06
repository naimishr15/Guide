import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AdminPlayersComponent } from "./admin-players/admin-players.component";
import { AdminGamesComponent } from "./admin-games/admin-games.component";
import { AdminPlayersFormComponent } from "./admin-players-form/admin-players-form.component";
import { AuthguardGuard } from "../core/services/guard/authguard.guard";

/**
 * Admin Module
 * to encapsulate functionality related
 * to admin
 */
@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminPlayersComponent,
    AdminGamesComponent,
    AdminPlayersFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "admin",
        children: [
          { path: "login", component: AdminLoginComponent },
          {
            path: "players",
            component: AdminPlayersComponent,
            canActivate: [AuthguardGuard]
          },
          {
            path: "games",
            component: AdminGamesComponent,
            canActivate: [AuthguardGuard]
          }
        ]
      }
    ])
  ],
  entryComponents: [AdminPlayersFormComponent]
})
export class AdminModule {}
