import { Guid } from 'guid-typescript';
import { Oggetto } from './oggetto';
import { Persona } from './persona';

export class Proposta {
  data: Date;
  oggetti: Oggetto[] = new Array();
  offerente: Persona;
  ricevente: Persona;
  isAccettato: boolean;
  codiceTransazione: Guid | undefined;

  constructor(
    oggetti: Oggetto[],
    off: Persona,
    ric: Persona,
    isAccettato: boolean = false
  ) {
    this.data = new Date();
    this.oggetti = oggetti;
    this.offerente = off;
    this.ricevente = ric;
    this.isAccettato = isAccettato;
  }
}
