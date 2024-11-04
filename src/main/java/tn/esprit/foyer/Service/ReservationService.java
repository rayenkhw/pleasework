package tn.esprit.foyer.Service;

import tn.esprit.foyer.Entity.Reservation;

import java.sql.Date;
import java.util.List;

public interface ReservationService {
    List<Reservation> retrieveAllReservation();

    Reservation updateReservation (Reservation res);
    Reservation retrieveReservation (long idReservation);
    public Reservation getReservationParAnneeUniversitaire(Date date );
    public Reservation ajouterReservation (long idChambre, long cinEtudiant) ;
    public List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite( Date anneeUniversite, String nomUniversite) ;

}
