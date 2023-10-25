import { Component, OnInit, inject } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Categoria } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categoria.service';

import '../../../extensions/form-group.extension'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inserir-categoria',
  templateUrl: './inserir-categoria.component.html',
  styleUrls: ['./inserir-categoria.component.scss']
})
export class InserirCategoriaComponent implements OnInit{
  // private formBuilder = inject(FormBuilder);
  // categoria = this.formBuilder.group({
  //   titulo: [null, Validators.compose([
  //     Validators.required, 
  //     Validators.minLength(5), 
  //     Validators.maxLength(20)])
  //   ]
  // });

  
  formulario!: FormGroup;
  categoriaViewModel!: Categoria;

  categorias$?: Observable<Categoria[]>;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router, 
    private servicoCategoria: CategoriasService
  ){
  }

  ngOnInit(){
    this.formulario = this.formBuilder.group({
      titulo: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(): void {
    console.log('teste')
    if (this.formulario.invalid) {
      for (let erro of this.formulario.validate()) {
        this.toastrService.warning(erro);
      }
      return;
    }

    this.categoriaViewModel = this.formulario.value

    this.servicoCategoria.criar(this.formulario?.value).subscribe({
      next: (res) => this.processarSucesso(res),
      error: (res) => this.processarFalha(res)
    })
  }

  processarSucesso(categoria: Categoria) {
    this.toastrService.success(
      `A categoria "${categoria.titulo}" foi cadastrada com sucesso!`,
      'Sucesso'
    );

    this.router.navigate(['/categorias/listar']);
  }

  processarFalha(erro: Error) {
    this.toastrService.error(erro.message, 'Error');
  }
}
