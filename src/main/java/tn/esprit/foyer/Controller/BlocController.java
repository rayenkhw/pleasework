package tn.esprit.foyer.Controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entity.Bloc;
import tn.esprit.foyer.Service.BlocService;


import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/blocs")
@CrossOrigin("*")
public class BlocController {
    BlocService blocService;

    @GetMapping("/all")
    public List<Bloc> getAll() {
        return blocService.retrieveBlocs();
    }
    @GetMapping("/{id}")
    public Bloc getBlocById(@PathVariable Long id){
        return blocService.retrieveBloc(id);
    }

    @PostMapping("/add")
    public Bloc addBloc(@RequestBody Bloc e) {
        return blocService.addBloc(e);
    }
    @PutMapping("/update")
    public Bloc updateBloc( @RequestBody Bloc  bloc){
        return blocService.updateBloc(bloc);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteBloc(@PathVariable Long id){
        blocService.removeBloc(id);

    }
    @PutMapping("/affecterChambresABloc")
    public Bloc affecterChambresABloc( @RequestBody List<Long> numChambre,@RequestParam("nombloc") String  nomBloc){
        return blocService.affecterChambresABloc(numChambre,nomBloc);
    }
}
