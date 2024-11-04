package tn.esprit.foyer.Controller;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.foyer.Entity.Etudiant;
import tn.esprit.foyer.Service.EtudiantService;

import java.util.List;

@RestController
@AllArgsConstructor
@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
@RequestMapping("/etudiant")
@CrossOrigin("*")
public class EtudiantController {
    EtudiantService etudiantService;
    @GetMapping("/all")
    public List<Etudiant> getAll() {
        return etudiantService.retrieveAllEtudiants();
    }
    @GetMapping("/{id}")
    public Etudiant getEtudiantById(@PathVariable Long id){
        return etudiantService.retrieveEtudiant(id);
    }

    @PostMapping("/add")
    public Etudiant addEtudiant(@RequestBody Etudiant e) {
        return etudiantService.addEtudiant(e);
    }
    @PutMapping("/update")
    public Etudiant updateEtudiant( @RequestBody Etudiant  etudiant){
        return etudiantService.updateEtudiant(etudiant);
    }
    @DeleteMapping("/delete/{id}")
    public void deleteEtudiant(@PathVariable Long id){
        etudiantService.removeEtudiant(id);

    }
    @PostMapping("/addall")
    public List<Etudiant> addEtudiants(@RequestBody List<Etudiant> etudiants) {
        return etudiantService.addEtudiants(etudiants);
    }
    @PutMapping  ("/affecterEtudiantReservation")
    public Etudiant affecterEtudiantAReservation(@RequestParam("idReservation") String  idReservation,@RequestParam("nomEt") String  nomEt,@RequestParam("prenomEt") String  prenomEt) {
        return etudiantService.affecterEtudiantAReservation(nomEt,prenomEt,idReservation);
    }

}
