package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Etudiant;

public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
    Etudiant findEtudiantByNomEtAndPrenomEt(String nomEt,String prenomEt);
    Etudiant findByCin(long cin);
}
