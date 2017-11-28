import { Aluno } from './aluno';
import { Turma } from './turma';
export class Matricula {
  aluno: Aluno;
  turma: Turma;
  ano: number;

  constructor() {
    this.clean();
  }

  clean(): void {
  	this.aluno = null;
    this.turma = null;
    this.ano = 0;
  }

  clone(): Matricula {
    var matricula: Matricula = new Matricula();
    matricula.copyFrom(this);
    return matricula;
  }

  copyFrom(from: Matricula): void {
   	this.aluno = from.aluno;
	  this.turma = from.turma;
	  this.ano = from.ano;
  }
}
