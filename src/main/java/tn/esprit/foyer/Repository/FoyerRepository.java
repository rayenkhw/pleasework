package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.foyer.Entity.Foyer;

public interface FoyerRepository extends JpaRepository<Foyer, Long> {

    @Modifying
    @Query("update Foyer u set u.archiverFoyer = TRUE where u.idFoyer = ?1")
    void UpdateArchiver(long id);

}
