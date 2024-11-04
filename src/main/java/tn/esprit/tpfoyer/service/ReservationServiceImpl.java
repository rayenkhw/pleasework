package tn.esprit.tpfoyer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.tpfoyer.entity.Reservation;
import tn.esprit.tpfoyer.repository.ReservationRepository;
import java.util.List;

@Service
public class ReservationServiceImpl implements IReservationService {

    @Autowired
    private ReservationRepository reservationRepository;

    public List<Reservation> retrieveAllReservations() {
        return reservationRepository.findAll();
    }

    public Reservation retrieveReservation(String reservationId) {
        return reservationRepository.findById(reservationId).get();
    }

    public Reservation addReservation(Reservation r) {
        return reservationRepository.save(r);
    }

    public Reservation modifyReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    public void removeReservation(String reservationId) {
        reservationRepository.deleteById(reservationId);
    }
}
