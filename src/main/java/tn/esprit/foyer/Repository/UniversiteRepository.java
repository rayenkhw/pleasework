package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Universite;

public interface UniversiteRepository extends JpaRepository<Universite, Long> {

     Universite findByNomUniversite(String nomUniversite);




}
