package tn.esprit.foyer.Exception;

public class ReservationNotFoundException extends RuntimeException{
    public ReservationNotFoundException(String S){
        super(S);
    }
}
