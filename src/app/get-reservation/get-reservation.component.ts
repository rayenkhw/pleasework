import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../service/foyer.service';
import { Reservation } from '../models/Reservation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-get-reservation',
  templateUrl: './get-reservation.component.html',
  styleUrls: ['./get-reservation.component.css']
})
export class GetReservationComponent implements OnInit {
  reservations: Reservation[] = []; // Array to hold the reservations
  errorMessage: string | null = null; // Variable to hold any error messages

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.loadReservations(); // Load reservations on component initialization
  }

  loadReservations(): void {
    this.foyerService.getAllReservation().subscribe(
      (data: Reservation[]) => {
        this.reservations = data; // Assign fetched reservations to the array
      },
      (error) => {
        this.errorMessage = 'Failed to load reservations. Please try again.'; // Handle errors
        console.error(error);
      }
    );
  }
}
