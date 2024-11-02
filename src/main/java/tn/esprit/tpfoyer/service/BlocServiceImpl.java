package tn.esprit.tpfoyer.service;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import tn.esprit.tpfoyer.entity.Bloc;
import tn.esprit.tpfoyer.repository.BlocRepository;
import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class BlocServiceImpl  implements IBlocService {


    BlocRepository blocRepository;

    public List<Bloc> retrieveAllBlocs() {
        return blocRepository.findAll();
    }
    @Transactional
    public List<Bloc> retrieveBlocsSelonCapacite(long c) {
        return blocRepository.findAll();
    }

    @Transactional
    public Bloc retrieveBloc(Long blocId) {
        return blocRepository.findById(blocId).get();
    }
    public Bloc addBloc(Bloc c) {
        Bloc bloc = new Bloc();
        bloc = blocRepository.save(c);
        return bloc;
    }

    public Bloc modifyBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    public void removeBloc(Long blocId) {
        blocRepository.deleteById(blocId);
    }



    public List<Bloc> trouverBlocsSansFoyer() {
        return blocRepository.findAllByFoyerIsNull();
    }

    public List<Bloc> trouverBlocsParNomEtCap(String nb, long c) {
        return blocRepository.findAllByNomBlocAndCapaciteBloc(nb,  c);
    }

}
