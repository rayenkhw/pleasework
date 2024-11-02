package tn.esprit.tpfoyer.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

import java.io.Serializable;
import java.util.Set;


@Entity
@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Chambre implements Serializable {


    //properties
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idChambre;
    private Long NumeroChambre;
    public enum TypeChambre {
        Simple, Double, Triple
    }
    @Enumerated(EnumType.ORDINAL)
    private TypeChambre typeC;


}
