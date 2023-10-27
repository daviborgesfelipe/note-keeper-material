import { Categoria } from "../../categorias/models/forms-categoria.view-model";
import { Tema } from "./tema-enum";

export type Notas = {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;

  categoriaId: number;
  categoria?: Categoria;

  arquivada: boolean;
}