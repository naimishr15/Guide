import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";
import { Observable, of } from "rxjs";
import { AdminService } from "../admin/admin.service";

@Injectable({
  providedIn: "root"
})
export class AuthguardGuard implements CanActivate {
  /**
   * Angular constructor
   * @param adminService
   * @param router
   */
  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    if (this.adminService.isLoggedIn()) {
      this.adminService.emitLogin(true);
      return of(true);
    } else {
      //If user is not logged in move to login page
      this.router.navigateByUrl("/admin/login");
      return of(false);
    }
  }
}
