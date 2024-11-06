import { Bloc } from '../models/Bloc';
import { Reservation } from './Reservation';

export enum TypeChambre {
    SIMPLE = 'SIMPLE',
    DOUBLE = 'DOUBLE',
    TRIPLE = 'TRIPLE'
}

export class Chambre {
    idChambre: number;
    numeroChambre: number;
    typeChambre: TypeChambre;
    bloc?: Bloc;
    reservations?: Reservation[];

    constructor(
        idChambre: number,
        numeroChambre: number,
        typeChambre: TypeChambre,
        bloc?: Bloc,
        reservations?: Reservation[]
    ) {
        this.idChambre = idChambre;
        this.numeroChambre = numeroChambre;
        this.typeChambre = typeChambre;
        this.bloc = bloc;
        this.reservations = reservations;
    }
}
