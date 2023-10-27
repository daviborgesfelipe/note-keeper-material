import { inject } from '@angular/core';
import { CategoriasService } from './categoria.service';

export const listarCategoriasResolver = () => {
  return inject(CategoriasService).selecionarTodos();
};
