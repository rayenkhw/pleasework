package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.foyer.Entity.Reservation;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;


public interface ResevationRepository extends JpaRepository<Reservation, Long> {
    Reservation findByIdReservation(String idReservation);
    Reservation findReservationsByAnneeUniversitaire(Date date);
    boolean existsByEtudiantsCinAndAnneeUniversitaireBetween(long etudiants_cin, LocalDate startDate, LocalDate finDate);
    @Query("select Reservation from Reservation r join Chambre c where c.bloc.foyer.universite.nomUniversite=:nomUniversite and r.anneeUniversitaire=:anneeUniversitaire")
    List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(@Param("anneeUniversitaire") Date anneeUniversite, @Param("nomUniversite") String nomUniversite) ;
}
