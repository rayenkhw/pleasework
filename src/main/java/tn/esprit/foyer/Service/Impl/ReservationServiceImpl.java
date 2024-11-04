package tn.esprit.foyer.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;
import tn.esprit.foyer.Entity.Chambre;
import tn.esprit.foyer.Entity.Etudiant;
import tn.esprit.foyer.Entity.Reservation;
import tn.esprit.foyer.Exception.ChambreNotFoundException;
import tn.esprit.foyer.Exception.EtudiantNotFoundException;
import tn.esprit.foyer.Rebository.ChambreRepository;
import tn.esprit.foyer.Rebository.EtudiantRepository;
import tn.esprit.foyer.Rebository.ResevationRepository;
import tn.esprit.foyer.Service.ReservationService;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements ReservationService {
    ResevationRepository resevationRepository;
    ChambreRepository chambreRepository;
    EtudiantRepository etudiantRepository;

    @Override
    public List<Reservation> retrieveAllReservation() {
        return resevationRepository.findAll() ;
    }

    @Override
    public Reservation updateReservation(Reservation res) {
        return resevationRepository.save(res);
    }

    @Override
    public Reservation retrieveReservation(long idReservation) {
        return resevationRepository.findById(idReservation).get();
    }

    @Override
    public Reservation getReservationParAnneeUniversitaire(Date date) {
        return  resevationRepository.findReservationsByAnneeUniversitaire(date);
    }

    @Override
    public Reservation ajouterReservation(long idChambre, long cinEtudiant) {

        Chambre chambre = chambreRepository.findById(idChambre)
                .orElseThrow(() -> new ChambreNotFoundException("universite not found"));
        Etudiant etudiant = etudiantRepository.findByCin(cinEtudiant);
        String id = chambre.getNumeroChambre() + "-" + chambre.getBloc().getNomBloc() + "-" + LocalDate.now().getYear();
        Reservation reservation = new Reservation();
        reservation.setIdReservation(id);
        reservation.setChambre(chambre);
        reservation.setEstValide(true);
        reservation.setAnneeUniversitaire(LocalDate.now());
//        reservation.getEtudiants().add(etudiant);
        List<Etudiant> lsAux = new ArrayList<Etudiant>();
        lsAux.add(etudiant);
        reservation.setEtudiants(lsAux);

        int maxCapacity;
        switch (chambre.getTypeChambre()) {
            case SIMPLE:
                maxCapacity = 1;
                break;
            case DOUBLE:
                maxCapacity = 2;
                break;
            case TRIPLE:
                maxCapacity = 3;
                break;
            default:
                throw new IllegalArgumentException("Unknown TypeChambre");
        }
        int currentReservations = chambre.getReservations().size();
        if (currentReservations < maxCapacity) {
            resevationRepository.save(reservation);
        }
        return reservation;
    }

    @Override
    public List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(Date anneeUniversite, String nomUniversite) {
        return resevationRepository.getReservationParAnneeUniversitaireEtNomUniversite(anneeUniversite,nomUniversite);
    }
}
