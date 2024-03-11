import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

@Injectable({
  providedIn: 'root'
})
export class CursosResolver implements Resolve<Curso> {

  constructor(private cursosService: CursosService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
    if(route.params && route.params['id']){
      return this.cursosService.getId(route.params['id']);
    }

    return of({id:'', nome:'', categoria:''});
  }
}
