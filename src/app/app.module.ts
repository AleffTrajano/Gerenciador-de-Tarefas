import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { TarefaModule } from './tarefa';
import { ListarTarefaComponent } from './tarefas/listar/listar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TarefaModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
