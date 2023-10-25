import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Categoria } from '../models/forms-categoria.view-model';
import { CategoriasService } from '../services/categoria.service';

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.component.html',
  styleUrls: ['./listar-categorias.component.scss']
})
export class ListarCategoriasComponent {
  categorias$?: Observable<Categoria[]>;

  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private router: Router, 
    private servicoCategoria: CategoriasService
  ){
  }

  ngOnInit(){
    this.categorias$ = this.servicoCategoria.selecionarTodos();
  }
}
