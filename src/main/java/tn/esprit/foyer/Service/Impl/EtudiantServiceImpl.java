package tn.esprit.foyer.Service.Impl;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entity.Etudiant;
import tn.esprit.foyer.Entity.Reservation;
import tn.esprit.foyer.Repository.EtudiantRepository;
import tn.esprit.foyer.Repository.ResevationRepository;
import tn.esprit.foyer.Service.EtudiantService;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EtudiantServiceImpl implements EtudiantService {
    private final EtudiantRepository etudiantRepository;
    private final ResevationRepository resevationRepository;
    @Override
    public List<Etudiant> retrieveAllEtudiants() {
        return etudiantRepository.findAll();
    }

    @Override
    public Etudiant addEtudiant(Etudiant e) {
        return etudiantRepository.save(e);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepository.save(e);
    }

    @Override
    public Etudiant retrieveEtudiant(Long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).get();
    }

    @Override
    public void removeEtudiant(Long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);
    }

    @Override
    public List<Etudiant> addEtudiants(List<Etudiant> etudiants) {
      return etudiantRepository.saveAll(etudiants);
    }


    @Override
    public Etudiant affecterEtudiantAReservation(String nomEt, String prenomEt, String idReservation) {
        Etudiant etudiant = etudiantRepository.findEtudiantByNomEtAndPrenomEt(nomEt, prenomEt);
        Reservation reservation = resevationRepository.findByIdReservation(idReservation);

        if(etudiant != null && reservation != null) {


            List<Etudiant> lsAux = reservation.getEtudiants();
            lsAux.add(etudiant);
            reservation.setEtudiants(lsAux);

            resevationRepository.save(reservation);
            return etudiant;
        }

        return null;
    }


}
