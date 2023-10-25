import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Categoria } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.scss']
})
export class EditarCategoriasComponent implements OnInit{

  formulario!: FormGroup;
  categoriaViewModel!: Categoria;

  categorias$?: Observable<Categoria[]>;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router, 
    private servicoCategoria: CategoriasService,
    private route: ActivatedRoute
  ){
  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      titulo: [''],
    })

    const categoria = this.route.snapshot.data['categoria'];

    this.formulario.patchValue(categoria);
  }

  onSubmit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log('id')

    if (this.formulario.invalid) {
      for (let erro of this.formulario.validate()) {
        this.toastrService.warning(erro);
      }
      return;
    }

    this.categoriaViewModel = this.formulario.value

    this.servicoCategoria.editar(id, this.formulario?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (res) => this.processarFalha(res)
    })
  }

  processarSucesso(categoria: Categoria) {
    this.toastrService.success(
      `A categoria "${categoria.titulo}" foi editada com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}
