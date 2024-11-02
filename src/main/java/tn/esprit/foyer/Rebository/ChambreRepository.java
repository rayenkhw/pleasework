package tn.esprit.foyer.Rebository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Chambre;


public interface ChambreRepository extends JpaRepository<Chambre, Long> {
}
