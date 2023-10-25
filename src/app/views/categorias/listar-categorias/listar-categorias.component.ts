import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Categoria } from '../models/forms-categoria.view-model';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent {
  categorias$?: Observable<Categoria[]>;

  constructor(
    private route: ActivatedRoute
  ){
  }

  ngOnInit(){
    this.categorias$ = this.route.data.pipe(
      map(dados => dados['categorias'])
    );
  }
}
