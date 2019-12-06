import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/core/services/admin/admin.service";
import { IAdmin } from "src/app/core/interface/admin";
import { Router } from "@angular/router";
import { PATH_ROUTES } from "src/app/app.constant";

@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.scss"]
})
export class AdminLoginComponent implements OnInit {
  /** in progress */
  inProgress = false;

  /** Show login error */
  showError = false;

  /** Admin username */
  username: string = "";

  /** Admin password */
  password: string = "";

  /**
   * Angular constructor
   */
  constructor(private adminService: AdminService, private router: Router) {}

  /**
   * Angular lifecycle hook
   */
  ngOnInit(): void {
    const isAlreadyLoggedIn = this.adminService.isLoggedIn();
    if (isAlreadyLoggedIn) {
      this.router.navigateByUrl(PATH_ROUTES.PLAYERS);
    }
  }

  /**
   * Login given user
   */
  login(): void {
    this.inProgress = true;
    this.showError = false;
    const admin: IAdmin = {
      username: this.username,
      password: this.password
    };
    this.adminService.loginAdmin(admin).subscribe(
      res => {
        this.inProgress = false;
        this.adminService.emitLogin(true);
        this.router.navigateByUrl(PATH_ROUTES.PLAYERS);
      },
      err => {
        this.showError = true;
        this.inProgress = false;
      }
    );
  }
}
