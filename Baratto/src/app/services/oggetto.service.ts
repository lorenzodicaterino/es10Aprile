import { Injectable } from '@angular/core';
import { Oggetto } from '../model/oggetto';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class OggettoService {
  localOggetto: Oggetto[] = JSON.parse(localStorage.getItem('elencoOggetto')!)
    ? JSON.parse(localStorage.getItem('elencoOggetto')!)
    : [];

  x: Oggetto[] = new Array();

  constructor() {}

  inserisciOggetto(nom?: String, desc?: String, poss?: Persona): boolean {
    if (nom && desc && poss) {
      this.localOggetto.push(new Oggetto(nom, desc, poss));
      localStorage.setItem('elencoOggetto', JSON.stringify(this.localOggetto));
      return true;
    }
    return false;
  }

  restituisciOggetti(): Oggetto[] {
    return this.localOggetto;
  }

  restituisciOggettoPerPersona(per: Persona): Oggetto[] {
    this.x = new Array();
    this.localOggetto.forEach((element) => {
      if (element.possessore?.codicePersona == per.codicePersona) {
        this.x.push(element);
      }
    });

    return this.x;
  }
}
