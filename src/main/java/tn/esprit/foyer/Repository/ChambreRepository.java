package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Chambre;


public interface ChambreRepository extends JpaRepository<Chambre, Long> {
}
