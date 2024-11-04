package tn.esprit.foyer.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entity.Universite;
import tn.esprit.foyer.Repository.FoyerRepository;
import tn.esprit.foyer.Repository.UniversiteRepository;
import tn.esprit.foyer.Service.UniversiteService;

import java.util.List;

@Service
@AllArgsConstructor
public class UniversiteServiceImpl implements UniversiteService {
    UniversiteRepository universiteRepository;
    FoyerRepository foyerRepository;
    @Override
    public List<Universite> retrieveAllUniversities() {
        return universiteRepository.findAll();
    }

    @Override
    public Universite addUniversity(Universite u) {
        return universiteRepository.save(u);
    }

    @Override
    public Universite updateUniversity(Universite u) {
        return universiteRepository.save(u);
    }

    @Override
    public Universite retrieveUniversity(long idUniversity){
        return universiteRepository.findById(idUniversity).orElse(null);
    }

    @Override
    public void removeUniversity(long idUniversity) {
            universiteRepository.deleteById(idUniversity);
    }
    public Universite affecterFoyerAUniversite(long idFoyer, String nomUniversite) {
        Universite u = universiteRepository.findByNomUniversite(nomUniversite);
        if(u!=null) {
            u.setFoyer(foyerRepository.findById(idFoyer).get());
        }
        return universiteRepository.save(u);
    }

    @Override
    public Universite desaffecterFoyerAUniversite( long idUniversite) {
        Universite u = universiteRepository.findById(idUniversite).get();
        if(u!=null) {
            u.setFoyer(null);
        }
        return universiteRepository.save(u);
    }

}
