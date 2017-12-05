import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


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
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
