package tn.esprit.tpfoyer.entity;

import jakarta.persistence.*;
import lombok.*;
import tn.esprit.tpfoyer.entity.Foyer;

import java.io.Serializable;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Bloc implements Serializable {


    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBloc;
    private String NomBloc;
    @Column(nullable = true)
    private Long CapacityBloc;

}