import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Notas } from "../models/forms-notas.view-model";

@Injectable()
export class NotasService {
  private API_URL = `${environment.API_URL}/notas`;

  constructor(private http: HttpClient) {} 

  selecionarTodos(): Observable<Notas[]> {
    return this.http.get<Notas[]>(this.API_URL);
  }
}