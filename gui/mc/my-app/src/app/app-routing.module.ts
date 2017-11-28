import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//Routas
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { HomeComponent } from './home/home.component';
import { AtaComponent } from './ata/ata.component';

//Declarando as rotas
const routes: Routes = [
	{ path: 'cadastro-aluno', component: CadastroAlunoComponent },
	{ path: 'cadastro-turma', component: CadastroTurmaComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'ata', component: AtaComponent }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
