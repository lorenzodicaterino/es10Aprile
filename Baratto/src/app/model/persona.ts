import { Guid } from 'guid-typescript';

export class Persona {
  codicePersona: Guid;
  nominativo: String | undefined;

  constructor(nom?: String) {
    this.nominativo = nom;
    this.codicePersona = Guid.create();
  }
}
