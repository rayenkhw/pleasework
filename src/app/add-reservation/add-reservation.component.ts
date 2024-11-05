import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Reservation } from '../models/Reservation';
import { Router } from '@angular/router';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservationForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: FoyerService,
    private router: Router
  ) {
    this.reservationForm = this.formBuilder.group({
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      note: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  // Method to handle form submission
  onSubmit(): void {
    if (this.reservationForm.valid) {
      const reservation: Reservation = this.reservationForm.value;

      this.reservationService.addReservation(reservation).subscribe(
        response => {
          this.successMessage = 'Reservation added successfully!';
          this.errorMessage = '';
          // Optionally, navigate to another route or reset the form
          this.reservationForm.reset();
        },
        error => {
          this.errorMessage = 'There was an error adding the reservation. Please try again.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please fill out the required fields correctly.';
      this.successMessage = '';
    }
  }
}
