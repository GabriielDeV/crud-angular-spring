// atualizacao-cursos.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtualizarService {
  private atualizacaoCursos = new Subject<void>();

  atualizarCursos() {
    this.atualizacaoCursos.next();
  }

  get atualizacaoCursos$() {
    return this.atualizacaoCursos.asObservable();
  }

  constructor() { }
}
