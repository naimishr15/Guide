import { Component } from "@angular/core";
import { AdminService } from "./core/services/admin/admin.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  /**
   * Angualr constructor
   * @param adminService
   */
  constructor(private adminService: AdminService) {}

  /**
   * Angular lifecycle hook
   */
  ngOnInit(): void {
    const isLoggedIn = this.adminService.isLoggedIn();
    this.adminService.emitLogin(isLoggedIn);
  }
}
