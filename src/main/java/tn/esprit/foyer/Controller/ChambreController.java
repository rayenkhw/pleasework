package tn.esprit.foyer.Controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entity.Chambre;
import tn.esprit.foyer.Service.ChambreService;
import java.util.List;
import java.util.Set;

@RestController
@AllArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/chambres")
@CrossOrigin("*")
public class ChambreController {
    ChambreService chambreService;


    @GetMapping("/all")
    public List<Chambre> getAll() {
        return chambreService.retrieveAllChambres();
    }
    @GetMapping("/{id}")
    public Chambre getBlocById(@PathVariable Long id){
        return chambreService.retrieveChambre(id);
    }

    @PostMapping("/add")
    public Chambre addBloc(@RequestBody Chambre c) {
        return chambreService.addChambre(c);
    }
    @PutMapping("/update")
    public Chambre updateBloc( @RequestBody Chambre  c){
        return chambreService.updateChambre(c);
    }

    @GetMapping("/getChambresParNomBloc ")
    public Set<Chambre> getChambresParNomBloc(@RequestParam("nomBloc") String  nomBloc){
        return  chambreService.getChambresParNomBloc(nomBloc);
    }
    @GetMapping("/getChambresParBlocEtType")
    public long getChambresParBlocEtType(@RequestParam("id") Long id, @RequestParam("type") Chambre.TypeChambre type ){
        long blocs = chambreService.nbrChambreParTypeEtBloc(type,id);
        return blocs;
    }

}
