import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Curso } from '../model/curso';

//import { delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private  httClient: HttpClient) {}

  private readonly API = "api/cursos";

  lista() {
    return this.httClient.get<Curso[]>(this.API).pipe(
      tap(cursos=> console.log(cursos)),
      catchError(error => {
        console.error('Erro na requisição:', error);
        return throwError('Erro ao obter cursos. Por favor, tente novamente mais tarde.');
      })
      );
  }

  getId(id: string){
    return this.httClient.get<Curso>(`${this.API}/${id}`);
  }

  save(curso: Partial<Curso>){
    console.log(curso)
    console.log(curso.id)
    console.log('oiii')
    if(curso.id){
      return this.editar(curso);
    }
    return this.criar(curso);
  }

  criar(curso: Partial<Curso>){
    return this.httClient.post<Curso>(this.API, curso);
  }

  editar(curso: Partial<Curso>){
    return this.httClient.put<Curso>(`${this.API}/${curso.id}`, curso);
  }

  excluir(curso: Curso){
    return this.httClient.delete(`${this.API}/${curso.id}`);
  }
}
