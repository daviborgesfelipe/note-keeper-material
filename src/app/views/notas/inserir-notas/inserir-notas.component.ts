import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { Categoria } from '../../categorias/models/forms-categoria.view-model';
import { NotasService } from '../services/notas.service';
import { NotificationService } from 'src/app/core/notification/service/notification.service';
import { Notas } from '../models/forms-notas.view-model';

@Component({
  selector: 'app-inserir-notas',
  templateUrl: './inserir-notas.component.html',
  styleUrls: ['./inserir-notas.component.scss']
})
export class InserirNotasComponent implements OnInit {
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
      map((dados) => dados['categorias'])
    );
  }

  gravar(): void {
    this.notasService.criar(this.form?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (err) => this.processarFalha(err),
    });
  }

  processarSucesso(res: Notas) {
    this.notification.sucesso(
      `A nota ${res.titulo} foi cadastrada com sucesso!`
    );

    this.router.navigate(['/notas', 'listar']);
  }

  processarFalha(err: any) {
    this.notification.erro(err.message);
  }
}
