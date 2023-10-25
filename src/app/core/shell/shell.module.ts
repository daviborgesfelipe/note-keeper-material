import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShellComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    ShellComponent
  ]
})
export class ShellModule { }
