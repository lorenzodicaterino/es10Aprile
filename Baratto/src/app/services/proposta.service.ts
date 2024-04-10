import { Persona } from './../model/persona';
import { Injectable } from '@angular/core';
import { Proposta } from '../model/proposta';
import { Oggetto } from '../model/oggetto';

@Injectable({
  providedIn: 'root',
})
export class PropostaService {
  localProposta: Proposta[] = JSON.parse(
    localStorage.getItem('elencoProposta')!
  )
    ? JSON.parse(localStorage.getItem('elencoProposta')!)
    : [];

  x: Proposta[] = new Array();

  constructor() {}

  inserisciProposta(
    oggetti: Oggetto[],
    off: Persona,
    ric: Persona,
    isAccettato: boolean
  ): boolean {
    oggetti.forEach((element) => {
      if (
        element.possessore?.codicePersona != off.codicePersona ||
        element.possessore?.codicePersona != ric.codicePersona
      ) {
        return false;
      }
    });

    if (oggetti && off && ric && isAccettato) {
      this.localProposta.push(new Proposta(oggetti, off, ric, isAccettato));
      localStorage.setItem(
        'elencoProposta',
        JSON.stringify(this.localProposta)
      );
      return true;
    } else {
      return false;
    }
  }

  restituisciProposte(): Proposta[] {
    return this.localProposta;
  }

  restituisciPropostePerPersona(p: Persona): Proposta[] {
    this.localProposta.forEach((element) => {
      if (
        element.offerente.codicePersona == p.codicePersona ||
        element.ricevente.codicePersona == p.codicePersona
      ) {
        this.x.push(element);
      }
    });
    return this.x;
  }

  restituisciPropostePerOggetto(o: Oggetto): Proposta[] {
    this.localProposta.forEach((element) => {
      element.oggetti.forEach((og) => {
        if (og.codiceOggetto == o.codiceOggetto) this.x.push(element);
      });
    });
    return this.x;
  }
}
