import { Component } from '@angular/core';
import { PersonagemService } from '../../Service/PersonagemService';
import { CommonModule, NgFor } from '@angular/common';
import { RequestPersonagemInfoModel } from '../../Model/RequestPersonagemInfoModel';
import { PersonagemModel } from '../../Model/PersonagemModel';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personagens',
  standalone: true,
  imports: [CommonModule, NgFor,  FormsModule],
  templateUrl: './personagens.component.html',
  styleUrl: './personagens.component.css'
})
export class PersonagensComponent {
  infos: RequestPersonagemInfoModel = {} as RequestPersonagemInfoModel;
  personagens: PersonagemModel[] = [];

  quantidadePaginas: any[] = [];
  paginaAtual: number = 1;

  constructor(private router: Router, private route: ActivatedRoute, private personagemService: PersonagemService) { }



  onPageChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPage = +selectElement.value;
    this.router.navigate(['/personagens', selectedPage]);
    this.buscar();
  }


buscar(){
  this.personagemService.allChars(this.paginaAtual).subscribe({
    next: (response) => {
      
      this.quantidadePaginas = [];
      if (response.info.pages > 0) {
        for (let x = 0; x < response.info.pages; x++) {
          this.quantidadePaginas.push(x + 1);
        }
      }

      this.infos = response.info;
      this.personagens = response.results;
    }
  })
}

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const pagina = parseInt(params.get('page') || '0', 10); if (!isNaN(pagina) && pagina !== 0) {
        this.paginaAtual = pagina;
      }
    });
    this.buscar();
 
  }
}
