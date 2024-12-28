import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { PersonagemComponent } from './pages/personagem/personagem.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'personagem/:id', component: PersonagemComponent },
    { path: 'personagens/:page', component: PersonagensComponent },
    { path: 'personagens', component: PersonagensComponent },
];
