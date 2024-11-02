package tn.esprit.tpfoyer.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.tpfoyer.entity.Bloc;

import java.util.List;














@Repository
 public interface BlocRepository extends JpaRepository<Bloc, Long> {

    List<Bloc> findAllByNomBlocAndCapaciteBloc (String nom , long capacite );


    Bloc findBlocByNomBlocAndCapaciteBlocGreaterThan(String nb, long c);

    List<Bloc> findAllByFoyerIsNull();


    //Bloc findByC
    //findAllByFoyerIsNull();




}
