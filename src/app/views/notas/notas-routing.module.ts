import { NgModule, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListarNotasComponent } from './listar-notas/listar-notas.component';
import { NotasService } from './services/notas.service';
import { InserirNotasComponent } from './inserir-notas/inserir-notas.component';
import { listarCategoriasResolver } from '../categorias/services/listar-categorias.resolver';
import { EditarNotasComponent } from './editar-notas/editar-notas.component';
import { ExcluirNotasComponent } from './excluir-notas/excluir-notas.component';

const listarNotasResolver = () => {
  return inject(NotasService).selecionarTodos();
};

const formsNotaResolver = (route: ActivatedRouteSnapshot) => {
  const id = parseInt(route.paramMap.get('id')!);

  return inject(NotasService).selecionarPorId(id);
};

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
    pathMatch: 'full',
  },
  {
    path: 'listar',
    component: ListarNotasComponent,
    resolve: { notas: listarNotasResolver },
  },
  {
    path: 'inserir',
    component: InserirNotasComponent,
    resolve: { categorias: listarCategoriasResolver },
  },
  {
    path: 'editar/:id',
    component: EditarNotasComponent,
    resolve: { nota: formsNotaResolver, categorias: listarCategoriasResolver },
  },
  {
    path: 'excluir/:id',
    component: ExcluirNotasComponent,
    resolve: { nota: formsNotaResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotasRoutingModule { }
