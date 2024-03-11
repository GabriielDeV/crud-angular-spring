import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosResolver } from './guarda-rotas/cursos.resolver';

const routes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'novo', component: CursosFormComponent, resolve: {curso: CursosResolver}},
  {path: 'editar/:id', component: CursosFormComponent, resolve: {curso: CursosResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
