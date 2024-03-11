import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from './../model/curso';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-listar-cursos',
  templateUrl: './listar-cursos.component.html',
  styleUrl: './listar-cursos.component.scss'
})
export class ListarCursosComponent {

  @Input() cursos: Curso[] = [];
  @Output() add = new EventEmitter (false);
  @Output() editar = new EventEmitter (false);
  @Output() deletar = new EventEmitter (false);
  displayedColumns = ['nome', 'categoria', 'acoes'];

  constructor (){

  }

  adicionarCurso(){
    //this.rotas.navigate(['novo'], {relativeTo: this.rota}),
    //console.log("cliquei..")
    this.add.emit(true);
  }

  editarCurso(curso: Curso){
    this.editar.emit(curso);
  }

  deletarCurso(curso: Curso){
    this.deletar.emit(curso);
  }

}
