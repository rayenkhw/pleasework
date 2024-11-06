import { Reservation } from './Reservation';

export class Etudiant {
    idEtudiant: number;
    nomEt: string;
    prenomEt: string;
    cin: number;
    ecole: string;
    dateNaissance: Date;
    reservations?: Reservation[];

    constructor(
        idEtudiant: number,
        nomEt: string,
        prenomEt: string,
        cin: number,
        ecole: string,
        dateNaissance: Date,
        reservations?: Reservation[]
    ) {
        this.idEtudiant = idEtudiant;
        this.nomEt = nomEt;
        this.prenomEt = prenomEt;
        this.cin = cin;
        this.ecole = ecole;
        this.dateNaissance = dateNaissance;
        this.reservations = reservations;
    }
}
