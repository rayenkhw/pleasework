package tn.esprit.foyer.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Universite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long idUniversite;
    private String nomUniversite;
    private String adresse;
    @OneToOne(cascade = CascadeType.ALL)
    @JsonBackReference
    private Foyer foyer;
}
