import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';

import { InserirCategoriaComponent } from './inserir-categoria/inserir-categoria.component';
import { ListarCategoriasComponent } from './listar-categorias/listar-categorias.component';
import { EditarCategoriasComponent } from './editar-categorias/editar-categorias.component';
import { CategoriasService } from './services/categoria.service';
import { ExcluirCategoriasComponent } from './excluir-categorias/excluir-categorias.component';

const formsCaregoriaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);
  return inject(CategoriasService).selecionarPorId(id);
}

const listarCategoriasResolver = () => {
  return inject(CategoriasService).selecionarTodos();
}

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarCategoriasComponent,
    resolve: { categorias: listarCategoriasResolver }
  },
  {
    path: 'inserir',
    component: InserirCategoriaComponent,
  },
  {
    path: 'editar/:id',
    component: EditarCategoriasComponent,
    resolve: { categoria: formsCaregoriaResolver }
  },
  {
    path: 'excluir/:id',
    component: ExcluirCategoriasComponent,
    resolve: { categoria: formsCaregoriaResolver }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
