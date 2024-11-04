import { Chambre } from './Chambre';
import { Etudiant } from './Etudiant';

export class Reservation {
    idReservation: number;
    anneeUniversitaire: Date;
    estValide: boolean;
    chambre?: Chambre;
    etudiants?: Etudiant[];

    constructor(
        idReservation: number,
        anneeUniversitaire: Date,
        estValide: boolean,
        chambre?: Chambre,
        etudiants?: Etudiant[]
    ) {
        this.idReservation = idReservation;
        this.anneeUniversitaire = anneeUniversitaire;
        this.estValide = estValide;
        this.chambre = chambre;
        this.etudiants = etudiants;
    }
}
