import { Component } from '@angular/core';
import { PersonagemService } from '../../Service/PersonagemService';
import { CommonModule, NgFor } from '@angular/common';
@Component({
  selector: 'app-personagem',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './personagem.component.html',
  styleUrl: './personagem.component.css'
})
export class PersonagemComponent {
  cars: string[] = [];
  constructor(private personagemService: PersonagemService) {}

  ngOnInit(): void {

  }

}
