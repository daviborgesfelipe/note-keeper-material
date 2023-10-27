import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, tap, map, switchMap } from 'rxjs';
import { NotificationService } from 'src/app/core/notification/service/notification.service';
import { Categoria } from '../../categorias/models/forms-categoria.view-model';
import { NotasService } from '../services/notas.service';
import { Notas } from '../models/forms-notas.view-model';

@Component({
  selector: 'app-editar-notas',
  templateUrl: './editar-notas.component.html',
  styleUrls: ['./editar-notas.component.scss']
})
export class EditarNotasComponent implements OnInit {
  form?: FormGroup;
  categorias$?: Observable<Categoria[]>;

  constructor(
    private notasService: NotasService,
    private notification: NotificationService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      conteudo: [''],
      tema: ['primary'],

      categoriaId: [undefined, [Validators.required]],
    });

    this.categorias$ = this.route.data.pipe(
      tap((dados) => {
        this.form?.patchValue(dados['nota']);
      }),
      map((dados) => dados['categorias'] as Categoria[])
    );
  }

  gravar(): void {
    this.route.paramMap
      .pipe(
        map((params) => parseInt(params.get('id')!)),
        switchMap((id) => this.notasService.editar(id, this.form?.value))
      )
      .subscribe({
        next: (res) => this.processarSucesso(res),
        error: (err) => this.processarFalha(err),
      });
  }

  processarSucesso(res: Notas) {
    this.notification.sucesso(`A nota ${res.titulo} foi editada com sucesso!`);

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}