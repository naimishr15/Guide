import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./component/header/header.component";

import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";

/**
 * Shared Module
 * To encapsulate shared components, directives
 * modules etc.
 */
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class SharedModule {}
