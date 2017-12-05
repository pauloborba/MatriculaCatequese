import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno.ts';
import { Responsavel } from '../../models/responsavel.ts';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cadastro-aluno',
  templateUrl: './cadastro-aluno.component.html',
  styleUrls: ['./cadastro-aluno.component.css']
})
export class CadastroAlunoComponent implements OnInit {

  aluno: Aluno;
  responsavel: Responsavel;
  companheiro: Responsavel;


  constructor(private http: Http) { 
  	this.aluno = new Aluno();
  	this.responsavel = new Responsavel();
  	this.companheiro = new Responsavel();
  }

  onSubmit(form){
  	console.log(form);
  	this.responsavel.companheiro = this.companheiro;
  	this.responsavel.alunos[0] = this.aluno;

  	console.log(this.responsavel);


  	//post pro server
  	this.http.post('https://httpbin.org/post', JSON.stringify(this.responsavel))
  		.map(res => res)
  		.subscribe(dados => console.log(dados));
  }

  ngOnInit() {
  }

  consultaCEP(cep, form){
  	cep = cep.replace(/\D/g, '');
  	this.resetaEndereco(form);
  	if (cep != ""){
  		var validacep = /^[0-9]{8}$/;
  		if (validacep.test(cep)) {
  			this.http.get("//viacep.com.br/ws/" + cep + "/json")
  				.map(dados => dados.json())
  				.subscribe(dados => this.popularDadosForm(dados, form));
  		}
  	}
  }

  popularDadosForm (dados, ngForm){
  	ngForm.form.patchValue({
  		endereco: {
  			rua: dados.logradouro,
  			bairro: dados.bairro,
  			cidade: dados.localidade,
  			estado: dados.uf
  		}
  	});
  }

  resetaEndereco(ngForm){
  	ngForm.form.patchValue({
  		endereco: {
  			rua: null,
  			bairro: null,
  			cidade: null,
  			estado: null
  		}
  	});
  }

}
