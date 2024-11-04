package tn.esprit.foyer.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Bloc implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long  idBloc ;
    private String nomBloc;
    private long capacityBloc;
    @ManyToOne

    Foyer foyer;
    @OneToMany(cascade = CascadeType.ALL, mappedBy="bloc")

    private Set<Chambre> Chambres;
}
