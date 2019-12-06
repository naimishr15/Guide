import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable, BehaviorSubject } from "rxjs";
import { IAdmin } from "../../interface/admin";

import { tap, shareReplay, catchError } from "rxjs/operators";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})
export class AdminService {
  /** Api URL */
  apiUrl: string;

  /** Login emitter */
  loginEmitter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * Angular constructor
   */
  constructor(private http: HttpClient) {
    this.apiUrl = environment.api;
  }

  /**
   * login Admin
   */
  loginAdmin(admin: IAdmin): Observable<void> {
    return this.http
      .post<void>(`${this.apiUrl}admin`, admin)
      .pipe(tap(this.setSession));
  }

  /**
   * Set the token to localstorage
   *
   */
  setSession(loginResult) {
    if (loginResult.token) {
      const expiresAt = moment().add(loginResult.expiresIn, "second");
      localStorage.setItem("token", loginResult.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }
  }

  /**
   * Is user logged in
   */
  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  /**
   * Get expiration time of token
   */
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  /**
   * Logout user
   */
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }

  /**
   * Get login emitter
   */
  getLoginEmitter(): Observable<boolean> {
    return this.loginEmitter.asObservable();
  }

  /**
   * Login login value
   * @param value
   */
  emitLogin(value: boolean): void {
    this.loginEmitter.next(value);
  }
}
