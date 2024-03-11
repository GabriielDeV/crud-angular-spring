import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { CursosResolver } from './cursos.resolver';
import { CursosService } from '../services/cursos.service';
import { Curso } from '../model/curso';

describe('CursosResolver', () => {
  let resolver: CursosResolver;
  let cursosServiceSpy: jasmine.SpyObj<CursosService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CursosService', ['lista']);

    TestBed.configureTestingModule({
      providers: [
        CursosResolver,
        { provide: CursosService, useValue: spy }
      ]
    });

    resolver = TestBed.inject(CursosResolver);
    cursosServiceSpy = TestBed.inject(CursosService) as jasmine.SpyObj<CursosService>;
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
