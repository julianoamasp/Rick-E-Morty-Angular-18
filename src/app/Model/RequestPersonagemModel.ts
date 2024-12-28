import { PersonagemModel } from "./PersonagemModel";
import { RequestPersonagemInfoModel } from "./RequestPersonagemInfoModel";

export class RequestPersonagemModel {
    info: RequestPersonagemInfoModel;
    results: PersonagemModel[];
  
    constructor(info: RequestPersonagemInfoModel, results: PersonagemModel[], idade: number, habilidades: string[]) {
      this.info = info;
      this.results = results;
    }
  }
  