import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CadastroAlunoComponent } from './cadastro-aluno/cadastro-aluno.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroTurmaComponent } from './cadastro-turma/cadastro-turma.component';
import { HomeComponent } from './home/home.component';
import { AtaComponent } from './ata/ata.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroAlunoComponent,
    CadastroTurmaComponent,
    HomeComponent,
    AtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
