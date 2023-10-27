import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotasService } from './services/notas.service';
import { InserirNotasComponent } from './inserir-notas/inserir-notas.component';
import { RouterModule } from '@angular/router';
import { CategoriasModule } from '../categorias/categorias.module';


@NgModule({
  declarations: [
    ListarNotasComponent,
    InserirNotasComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CategoriasModule
  ],
  providers: [
    NotasService
  ],
})
export class NotasModule { }
