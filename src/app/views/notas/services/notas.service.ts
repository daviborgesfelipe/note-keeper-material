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

  criar(nota: Notas): Observable<Notas> {
    return this.http.post<Notas>(this.NOTAS_API_URL, nota);
  }
}