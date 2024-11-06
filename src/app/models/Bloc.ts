import { Foyer } from './Foyer';
import { Chambre } from './Chambre';

export class Bloc {
    idBloc: number;
    nomBloc: string;
    capacityBloc: number;
    foyer?: Foyer;
    chambres?: Chambre[];

    constructor(idBloc: number, nomBloc: string, capacityBloc: number, foyer?: Foyer, chambres?: Chambre[]) {
        this.idBloc = idBloc;
        this.nomBloc = nomBloc;
        this.capacityBloc = capacityBloc;
        this.foyer = foyer;
        this.chambres = chambres;
    }
}
