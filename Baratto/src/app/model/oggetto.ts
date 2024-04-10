import { Guid } from 'guid-typescript';
import { Persona } from './persona';

export class Oggetto {
  codiceOggetto: Guid;
  nome: String | undefined;
  descrizione: String | undefined;
  possessore: Persona | undefined;

  constructor(nom?: String, desc?: String, poss?: Persona) {
    this.codiceOggetto = Guid.create();

    this.nome = nom;
    this.descrizione = desc;
    this.possessore = poss;
  }
}
