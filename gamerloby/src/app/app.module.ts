import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./shared/component/header/header.component";
import { CoreModule } from "./core/core.module";
import { LobbyModule } from "./lobby/lobby.module";
import { SharedModule } from "./shared/shared.module";
import { AdminModule } from "./admin/admin.module";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpInterceptorService } from "./core/services/interceptor/http-interceptor.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LobbyModule,
    AdminModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
