import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Notas } from '../models/forms-notas.view-model';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.scss']
})
export class ListarNotasComponent {
  notas$?: Observable<Notas[]>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.notas$ = this.route.data.pipe(map((dados) => dados['notas']));
  }
}
