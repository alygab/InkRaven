import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomeDisciplina = '';
  professor = '';
  dataProva = '';
  duracao = '';

  embaralharQuestoes = false;
  embaralharAlternativas = false;
  gerarVersoes = false;

  questao = '';
  questoes: string[] = [];

  incluirGabarito = false;
  numerarPaginas = false;

  formatoSaida = 'pdf';

  adicionarQuestao() {
    if (this.questao.trim()) {
      this.questoes.push(this.questao.trim());
      this.questao = '';
    }
  }

  gerarProvas() {
    console.log('Gerando prova com os seguintes dados:', {
      nomeDisciplina: this.nomeDisciplina,
      professor: this.professor,
      dataProva: this.dataProva,
      duracao: this.duracao,
      embaralharQuestoes: this.embaralharQuestoes,
      embaralharAlternativas: this.embaralharAlternativas,
      gerarVersoes: this.gerarVersoes,
      questoes: this.questoes,
      incluirGabarito: this.incluirGabarito,
      numerarPaginas: this.numerarPaginas,
      formatoSaida: this.formatoSaida,
    });
  }
}
