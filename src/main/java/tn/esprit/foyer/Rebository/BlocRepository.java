package tn.esprit.foyer.Rebository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Bloc;
import tn.esprit.foyer.Entity.Universite;


public interface BlocRepository extends JpaRepository<Bloc, Long> {
    Bloc findBlocByNomBloc(String nombloc);
}
