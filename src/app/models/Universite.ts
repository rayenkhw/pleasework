import { Foyer } from './Foyer';

export class Universite {
    idUniversite: number;
    nomUniversite: string;
    adresse: string;
    foyer?: Foyer;

    constructor(
        idUniversite: number,
        nomUniversite: string,
        adresse: string,
        foyer?: Foyer
    ) {
        this.idUniversite = idUniversite;
        this.nomUniversite = nomUniversite;
        this.adresse = adresse;
        this.foyer = foyer;
    }
}
