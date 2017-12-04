import { Aluno } from './aluno';
export class Responsavel {
  companheiro: Responsavel;
  nome: string;
  endereco: string;
  estadoCivil: string;
  telefone: string;
  parentesco: string;
  profissao: string;
  email: string;
  batismo: boolean;
  primeiraEucaristia: boolean;
  crisma: boolean;
  pastoral: boolean;
  pastoralName: string;
  igreja: string;
  dizimista: boolean;
  alunos: Aluno[];

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
  	this.companheiro = null;
	  this.endereco = "";
	  this.estadoCivil = "";
	  this.telefone = "";
	  this.parentesco = "";
	  this.profissao = "";
	  this.email = "";
	  this.batismo = false;
	  this.primeiraEucaristia = false;
	  this.crisma = false;
	  this.pastoral = false;
	  this.pastoralName = "";
	  this.igreja = "";
	  this.dizimista = false;
	  this.alunos = [];
  }

  clone(): Responsavel {
    var responsavel: Responsavel = new Responsavel();
    responsavel.copyFrom(this);
    return responsavel;
  }

  copyFrom(from: Responsavel): void {
    this.nome = from.nome;
    this.companheiro = from.companheiro;
	  this.endereco = from.endereco;
	  this.estadoCivil = from.estadoCivil;
	  this.telefone = from.telefone;
	  this.parentesco = from.parentesco;
	  this.profissao = from.profissao;
	  this.email = from.email;
	  this.batismo = from.batismo;
	  this.primeiraEucaristia = from.primeiraEucaristia;
	  this.crisma = from.crisma;
	  this.pastoral = from.pastoral;
	  this.pastoralName = from.pastoralName;
	  this.igreja = from.igreja;
	  this.dizimista = from.dizimista;
	  this.alunos = from.alunos;
  }
}
