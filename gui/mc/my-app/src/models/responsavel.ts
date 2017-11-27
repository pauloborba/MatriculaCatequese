import { Aluno } from './aluno';
export class Responsavel {
  companheiro: Responsavel;
  endereco: string;
  estadoCivil: string;
  telefone: string;
  parentesco: string;
  profissão: string;
  email: string;
  batisado: boolean;
  eucaristica: boolean;
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
  	this.companheiro = null;
	this.endereco = "";
	this.estadoCivil = "";
	this.telefone = "";
	this.parentesco = "";
	this.profissão = "";
	this.email = "";
	this.batisado = false;
	this.eucaristica = false;
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
    this.companheiro = from.companheiro;
	this.endereco = from.endereco;
	this.estadoCivil = from.estadoCivil;
	this.telefone = from.telefone;
	this.parentesco = from.parentesco;
	this.profissão = from.profissão;
	this.email = from.email;
	this.batisado = from.batisado;
	this.eucaristica = from.eucaristica;
	this.crisma = from.crisma;
	this.pastoral = from.pastoral;
	this.pastoralName = from.pastoralName;
	this.igreja = from.igreja;
	this.dizimista = from.dizimista;
	this.alunos = from.alunos;
  }
}
