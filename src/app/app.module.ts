import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TarefasModule } from './tarefas/shared/tarefa.module';
import { CadastrarComponent } from './tarefas/cadastrar/cadastrar.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TarefasModule,  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
