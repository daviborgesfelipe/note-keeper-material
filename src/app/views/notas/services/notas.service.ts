import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Notas } from "../models/forms-notas.view-model";

@Injectable()
export class NotasService {
  private NOTAS_API_URL = `${environment.API_URL}/notas`;

  constructor(private http: HttpClient) {} 

  selecionarTodos(): Observable<Notas[]> {
    return this.http.get<Notas[]>(this.NOTAS_API_URL);
  }

  selecionarPorId(id: number): Observable<Notas> {
    const url = `${this.NOTAS_API_URL}/${id}?_expand=categoria`;

    return this.http.get<Notas>(url);
  }

  criar(nota: Notas): Observable<Notas> {
    return this.http.post<Notas>(this.NOTAS_API_URL, nota);
  }

  editar(id: number, nota: Notas): Observable<Notas> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.put<Notas>(url, nota);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.NOTAS_API_URL}/${id}`;

    return this.http.delete<any>(url);
  }
}