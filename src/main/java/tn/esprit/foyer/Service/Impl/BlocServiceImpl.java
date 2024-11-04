package tn.esprit.foyer.Service.Impl;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.foyer.Entity.Bloc;
import tn.esprit.foyer.Entity.Chambre;
import tn.esprit.foyer.Rebository.BlocRepository;

import tn.esprit.foyer.Rebository.ChambreRepository;
import tn.esprit.foyer.Service.BlocService;

import java.util.List;

@Service
@AllArgsConstructor
public class BlocServiceImpl implements BlocService {
     BlocRepository blocRepository;
     ChambreRepository chambreRepository;

    @Override
    public List<Bloc> retrieveBlocs() {
        return blocRepository.findAll();
    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc retrieveBloc(long idBloc) {
        return blocRepository.findById(idBloc).get();
    }

    @Override
    public void removeBloc(long idBloc) {
        blocRepository.deleteById(idBloc);
    }


    @Override
    public Bloc affecterChambresABloc(List<Long> numChambres, String nomBloc) {

        Bloc b = blocRepository.findBlocByNomBloc(nomBloc);

        numChambres.forEach((id) -> {
            Chambre c = chambreRepository.findById(id).orElse(null);

            if(c != null)

                b.getChambres().add(c);

        });

        return blocRepository.save(b);
    }
}
