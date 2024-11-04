package tn.esprit.foyer.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;


@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Foyer implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFoyer;
    private String nomFoyer;
    @Column(columnDefinition = "boolean Default False")
    private boolean archiverFoyer;
    private Long capacityFoyer;
    @OneToOne(cascade = CascadeType.ALL,mappedBy = "foyer")
    @JsonManagedReference

    private Universite universite;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="foyer")
    private List<Bloc> Blocs;
}
