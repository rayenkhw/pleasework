package tn.esprit.foyer.Controller;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entity.Foyer;
import tn.esprit.foyer.Service.FoyerService;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/foyer")
@CrossOrigin("*")

public class FoyerController {
    FoyerService foyerService;
    @GetMapping("/all")
    public List<Foyer> getAll() {
        return foyerService.retrieveAllFoyers();
    }
    @GetMapping("/{id}")
    public Foyer getFoyerById(@PathVariable Long id){
        return foyerService.retrieveFoyer(id);
    }

    @PostMapping("/add")
    public Foyer addFoyer(@RequestBody Foyer e) {
        return foyerService.addFoyer(e);
    }
    @PutMapping("/update")
    public Foyer updateFoyer( @RequestBody Foyer f){
        return foyerService.updateFoyer(f);
    }
    @PutMapping("/SetArchiveTrue/{id}")
    public void ArchiveFoyer(@PathVariable Long id){
        foyerService.archiverFoyer(id);

    }

}
