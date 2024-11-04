package tn.esprit.foyer.Service.Impl;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entity.Foyer;
import tn.esprit.foyer.Rebository.EtudiantRepository;
import tn.esprit.foyer.Rebository.FoyerRepository;
import tn.esprit.foyer.Service.FoyerService;

import java.util.List;

@Service
@AllArgsConstructor
public class FoyerServiceImpl implements FoyerService {
    FoyerRepository foyerRepository;
    @Override
    public List<Foyer> retrieveAllFoyers() {
        return foyerRepository.findAll();
    }

    @Override
    public Foyer addFoyer(Foyer f) {
        return foyerRepository.save(f);
    }

    @Override
    public Foyer updateFoyer(Foyer f) {
        return foyerRepository.save(f);
    }

    @Override
    public Foyer retrieveFoyer(long idFoyer) {
        return foyerRepository.findById(idFoyer).orElse(null);
    }

    @Transactional
    public void archiverFoyer(long idFoyer) {
        foyerRepository.UpdateArchiver(idFoyer);
    }
}
