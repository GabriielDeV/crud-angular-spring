import { Curso } from './../model/curso';
import { Categoria } from './../model/categoria';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NonNullableFormBuilder } from '@angular/forms';
import { __values } from 'tslib';
import { CursosService } from '../services/cursos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AtualizarService } from '../services/atualizar.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrl: './cursos-form.component.scss'
})
export class CursosFormComponent implements OnInit {

  form = this.formBuilder.group({
    id:[''],
    nome: [''],
    categoria: ['']

  });

  categorias: Categoria[]= [
    {nome: "Front-End"},
    {nome: "Back-End"}
  ]

  constructor(
    private formBuilder : NonNullableFormBuilder,
    private service: CursosService,
    private snackbar: MatSnackBar,
    private location: Location,
    private rota: ActivatedRoute,
    private atualizar: AtualizarService
    ){

  }

  ngOnInit(): void {
    const curso: Curso = this.rota.snapshot.data['curso'];
    this.form.setValue({
      id: curso.id,
      nome: curso.nome,
      categoria: curso.categoria
    })

  }

  salvar(){
    this.service.save(this.form.value).
    subscribe( result => this.sucesso(),
    error => {this.snackbar.open("Ocorreu um erro", "Fechar")});
    this.cancelar();
  }

  cancelar(){
    this.location.back();
  }

  sucesso(){
    this.atualizar.atualizarCursos();
    this.snackbar.open("Salvo", "Fechar", {duration: 5000});
  }
}

