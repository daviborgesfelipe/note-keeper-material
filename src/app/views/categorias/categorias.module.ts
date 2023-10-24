import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { CategoriasService } from './services/categoria.service';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';


@NgModule({
  declarations: [
       InserirCategoriaComponent,
       ListarCategoriasComponent,
       EditarCategoriasComponent
  ],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    
  ],
  providers: [
    CategoriasService
  ],
})
export class CategoriasModule { }
