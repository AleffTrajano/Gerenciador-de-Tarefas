import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../tarefas/shared/tarefa.service';
import { ListarTarefaComponent } from '../tarefas/listar/listar-tarefa.component';

@NgModule({

  imports: [
    CommonModule,
  ],
  declarations:[
  ListarTarefaComponent],
  providers:[TarefaService],
})
export class TarefaModule { }
