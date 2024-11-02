package tn.esprit.foyer.Rebository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.foyer.Entity.Etudiant;
import tn.esprit.foyer.Entity.Universite;

public interface UniversiteRepository extends JpaRepository<Universite, Long> {

     Universite findByNomUniversite(String nomUniversite);




}
