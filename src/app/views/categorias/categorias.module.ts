import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { CategoriasService } from './services/categoria.service';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { ExcluirCategoriasComponent } from './excluir-categorias/excluir-categorias.component';


@NgModule({
  declarations: [
       InserirCategoriaComponent,
       ListarCategoriasComponent,
       EditarCategoriasComponent,
       ExcluirCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoriasService
  ],
})
export class CategoriasModule { }
