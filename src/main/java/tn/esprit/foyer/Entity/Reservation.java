package tn.esprit.foyer.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reservation implements Serializable {
    @Id
    private String idReservation;
    @Temporal(TemporalType.DATE)
    private LocalDate anneeUniversitaire;
    private Boolean estValide;
    @ManyToOne

    Chambre chambre;
    @ManyToMany
//    @JsonBackReference
    private List<Etudiant> etudiants;


}
