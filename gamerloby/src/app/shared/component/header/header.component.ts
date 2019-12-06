import { Component, OnInit } from "@angular/core";
import { PATH_ROUTES } from "../../../app.constant";
import { Router, NavigationEnd, Event } from "@angular/router";
import { AdminService } from "src/app/core/services/admin/admin.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  /** is user admin */
  isAdmin = false;

  /** application routes */
  routes = PATH_ROUTES;

  /** Selected index */
  selectedPath = this.routes.PLAYERS_RANKING;

  /**
   * Angular constructor
   */
  constructor(private router: Router, private adminService: AdminService) {}

  /**
   * Angular lifecycle hook
   */
  ngOnInit() {
    this.adminService.getLoginEmitter().subscribe(value => {
      this.isAdmin = value;
    });
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.selectedPath = event.url;
      }
    });
  }

  /**
   * Logout user
   */
  logout(): void {
    this.adminService.logout();
    this.adminService.emitLogin(false);
    this.goToRoute(PATH_ROUTES.LOGIN);
  }

  /**
   * Go to routes
   * @param route
   */
  goToRoute(route: string): void {
    this.selectedPath = route;
    this.router.navigateByUrl(route);
  }
}
