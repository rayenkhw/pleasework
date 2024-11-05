export class Reservation {
  idReservation?: number;
  dateDebut: string;
  dateFin: string;
  note: string;
  nom: string;
  prenom: string;
  email: string;

  constructor(
      dateDebut: string,
      dateFin: string,
      note: string,
      nom: string,
      prenom: string,
      email: string,
      idReservation?: number
  ) {
      this.dateDebut = dateDebut;
      this.dateFin = dateFin;
      this.note = note;
      this.nom = nom;
      this.prenom = prenom;
      this.email = email;
      this.idReservation = idReservation;
  }
}
