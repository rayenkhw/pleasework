package tn.esprit.foyer.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.foyer.Entity.Bloc;


public interface BlocRepository extends JpaRepository<Bloc, Long> {
    Bloc findBlocByNomBloc(String nombloc);
}
