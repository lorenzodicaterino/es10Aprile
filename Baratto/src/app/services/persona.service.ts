import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  localPersona: Persona[] = JSON.parse(localStorage.getItem('elencoPersona')!)
    ? JSON.parse(localStorage.getItem('elencoPersona')!)
    : [];

  constructor() {}

  inserisciPersonsa(nominativo: String): boolean {
    if (nominativo) {
      this.localPersona.push(new Persona(nominativo));
      localStorage.setItem('elencoPersone', JSON.stringify(this.localPersona));
      return true;
    }

    return false;
  }

  recuperaPersone(): Persona[] {
    return this.localPersona;
  }
}
