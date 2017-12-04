import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno.ts';
import { Responsavel } from '../../models/responsavel.ts';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno: Aluno;
  responsavel: Responsavel;
  companheiro: Responsavel;


  constructor() { 
  	this.aluno = new Aluno();
  	this.responsavel = new Responsavel();
  	this.companheiro = new Responsavel();
  }

  onSubmit(form){
  	console.log(form);
  	this.responsavel.companheiro = this.companheiro;
  	this.responsavel.alunos[0] = this.aluno;

  	console.log(this.responsavel);
  }

  ngOnInit() {
  }

}
