import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}from 'rxjs'
import { RequestPersonagemModel } from '../Model/RequestPersonagemModel';
@Injectable({
    providedIn: 'root'
  })
export class PersonagemService {
  constructor(private Http : HttpClient) {}

  public allChars(pagina:any){
    return this.Http.get<RequestPersonagemModel>("https://rickandmortyapi.com/api/character/?page="+pagina).pipe(map((response)=>{return response;}));
  }

}
