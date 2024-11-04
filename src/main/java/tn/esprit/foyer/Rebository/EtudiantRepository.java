package tn.esprit.foyer.Rebository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Etudiant;

import java.util.Optional;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    Etudiant findEtudiantByNomEtAndPrenomEt(String nomEt,String prenomEt);
    Etudiant findByCin(long cin);
}
