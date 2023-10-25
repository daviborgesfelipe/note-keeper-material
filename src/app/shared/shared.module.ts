import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHoverDirective } from './directives/card-hover.directive';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [CardHoverDirective],
  imports: [ 
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
  exports: [
    CardHoverDirective,
    MatCardModule,
    MatIconModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
  ],
})
export class SharedModule { }
