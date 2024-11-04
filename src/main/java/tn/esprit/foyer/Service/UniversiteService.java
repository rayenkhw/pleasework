package tn.esprit.foyer.Service;

import tn.esprit.foyer.Entity.Universite;

import java.util.List;

public interface UniversiteService {
    List<Universite> retrieveAllUniversities();
    Universite addUniversity (Universite u);
    Universite updateUniversity (Universite u);
    Universite retrieveUniversity (long idUniversity);
    void removeUniversity  (long idUniversity );
     Universite affecterFoyerAUniversite (long idFoyer, String nomUniversite) ;
     Universite desaffecterFoyerAUniversite (long idUniversite) ;
}
