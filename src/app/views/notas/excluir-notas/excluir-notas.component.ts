import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/service/notification.service';
import { NotasService } from '../services/notas.service';
import { Notas } from '../models/forms-notas.view-model';

@Component({
  selector: 'app-excluir-notas',
  templateUrl: './excluir-notas.component.html',
  styleUrls: ['./excluir-notas.component.scss']
})
export class ExcluirNotasComponent  implements OnInit {
  nota$?: Observable<Notas>;

  constructor(
    private notasService: NotasService,
    private notification: NotificationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.nota$ = this.route.data.pipe(map((dados) => dados['nota']));
  }

  excluir() {
    this.route.paramMap
      .pipe(
        map((params) => parseInt(params.get('id')!)),
        switchMap((id) => this.notasService.excluir(id))
      )
      .subscribe({
        next: () => this.processarSucesso(),
        error: (err) => this.processarFalha(err),
      });
  }

  processarSucesso() {
    this.notification.sucesso(`A nota foi excluída com sucesso!`);

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}
