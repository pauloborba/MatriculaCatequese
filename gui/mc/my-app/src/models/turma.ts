export class Turma {
  nome: string;
  sala: string;
  professores: string[];

  constructor() {
    this.clean();
  }

  clean(): void {
  	this.nome = "";
	  this.sala = ""; 
    this.professores = [];
  }

  clone(): Turma {
    var turma: Turma = new Turma();
    turma.copyFrom(this);
    return turma;
  }

  copyFrom(from: Turma): void {
   	this.nome = from.nome;
	  this.sala = from.sala;
	  this.professores = from.professores;
  }
}
