import { Universite } from '../models/Universite';
import { Bloc } from '../models/Bloc';

export class Foyer {
    idFoyer: number;
    nomFoyer: string;
    archiverFoyer: boolean;
    capacityFoyer: number;
    universite?: Universite;
    blocs?: Bloc[];

    constructor(
        idFoyer: number,
        nomFoyer: string,
        archiverFoyer: boolean,
        capacityFoyer: number,
        universite?: Universite,
        blocs?: Bloc[]
    ) {
        this.idFoyer = idFoyer;
        this.nomFoyer = nomFoyer;
        this.archiverFoyer = archiverFoyer;
        this.capacityFoyer = capacityFoyer;
        this.universite = universite;
        this.blocs = blocs;
    }
}
