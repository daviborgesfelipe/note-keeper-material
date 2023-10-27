import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotasService } from './services/notas.service';


@NgModule({
  declarations: [
    ListarNotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    NotasService
  ],
})
export class NotasModule { }
