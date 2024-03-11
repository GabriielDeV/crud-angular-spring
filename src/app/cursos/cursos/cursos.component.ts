import { CursosService } from './../services/cursos.service';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AtualizarService } from '../services/atualizar.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent  implements OnInit  {

  cursos$:  Observable<Curso[]> | null = null;
  displayedColumns = ['nome','categoria', 'acoes']


  constructor ( private cursosService: CursosService,
    private rotas: Router,
    private rota: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private atualizar: AtualizarService
    ){
  }

  ngOnInit(): void {
    this.carregar();

    this.atualizar.atualizacaoCursos$.subscribe(() => {
      this.carregar();
    })
  }

  carregar(){
    this.cursos$ = this.cursosService.lista();
  }

  OnError(msg: string){
    this.dialog.open( DialogComponent, {
      data: msg
    });
  }

  adicionarCurso(){
    this.rotas.navigate(['novo'], {relativeTo: this.rota}),
    console.log("cliquei..")
  }

  editarCurso(curso: Curso){
    console.log(curso);
    this.rotas.navigate(['editar', curso.id], {relativeTo: this.rota});
  }

  deletarCurso(curso: Curso){
    this.cursosService.excluir(curso).subscribe( () => {
      this.carregar();
      this.snackBar.open("Curso deletado com sucesso", "Fechar",
      {duration: 5000,
      verticalPosition: 'top',
      horizontalPosition:'center'},
      )
    },
    error => {this.OnError('Ocorreu um ERRO!')});
  }

}
