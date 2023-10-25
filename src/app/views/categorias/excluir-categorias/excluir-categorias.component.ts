import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { Categoria } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-excluir-categorias',
  templateUrl: './excluir-categorias.component.html',
  styleUrls: ['./excluir-categorias.component.scss']
})
export class ExcluirCategoriasComponent  implements OnInit {
  categoria$?: Observable<Categoria>;

  constructor(
    private categoriasService: CategoriasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoria$ = this.route.data.pipe(map((res) => res['categoria']));
  }

  confirmar(): void {
    // Forma Imperativa
    // const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    // this.categoriasService.excluir(id).subscribe({
    //   next: () => this.processarSucesso(),
    //   error: (err) => this.processarFalha(err),
    // });

    // Forma Declarativa (Reativa)
    this.route.paramMap
      .pipe(
        map((params) => parseInt(params.get('id')!)),
        switchMap((id) => this.categoriasService.excluir(id))
      )
      .subscribe({
        next: () => this.processarSucesso(),
        error: (err) => this.processarFalha(err),
      });
  }
  
  processarSucesso() {
    this.router.navigate(['/categorias', 'listar']);
  }

  processarFalha(err: any) {
    console.error('Erro:', err);
  }
}