export class Aluno {
  
  nome: string;
  nascimento: string;
  endereco: string;
  telefone: string;
  moraPais: boolean;
  escola: string;
  anoEscolar: string;
  periodo: string;
  casaDaCrianca: boolean;
  catequisado: boolean;
  catequeseExterna: string;
  batismo: boolean;
  igrejaBatismo: string;
  paroquia: string;
  primeiraEucaristia: boolean;
  saude: string;

  constructor() {
    this.clean();
  }

  clean(): void {
    this.nome = "";
    this.nascimento = "";
    this.endereco = "";
    this.telefone = "";
    this.moraPais = false;
    this.escola = "";
    this.anoEscolar = "";
    this.periodo = "";
    this.casaDaCrianca = false;
    this.catequisado = false;
    this.catequeseExterna = "";
    this.batismo = false;
    this.igrejaBatismo = "";
    this.paroquia = "";
    this.primeiraEucaristia = false;
    this.saude = "";
  }

  clone(): Aluno {
    var aluno: Aluno = new Aluno();
    aluno.copyFrom(this);
    return aluno;
  }

  copyFrom(from: Aluno): void {
    this.nome = from.nome;
    this.nascimento = from.nascimento;
    this.endereco = from.endereco;
    this.telefone = from.telefone;
    this.moraPais = from.moraPais;
    this.escola = from.escola;
    this.anoEscolar = from.anoEscolar;
    this.periodo = from.periodo;
    this.casaDaCrianca = from.casaDaCrianca;
    this.catequisado = from.catequisado;
    this.catequeseExterna = from.catequeseExterna;
    this.batismo = from.batismo;
    this.igrejaBatismo = from.igrejaBatismo;
    this.paroquia = from.paroquia;
    this.primeiraEucaristia = from.primeiraEucaristia;
    this.saude = from.saude;
  }
}
