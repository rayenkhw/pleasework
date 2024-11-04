import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chambre } from '../models/Chambre';
import { Etudiant } from '../models/Etudiant';
import { Reservation } from '../models/Reservation';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {
  reservationForm: FormGroup;
  chambres: Chambre[] = [];
  etudiants: Etudiant[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService
  ) {
    this.reservationForm = this.fb.group({
      anneeUniversitaire: ['', Validators.required],
      estValide: [false],
      chambre: ['', Validators.required],
      etudiants: [[]] // assuming this is a multi-select
    });
  }

  ngOnInit(): void {
    this.getChambres();
    this.getEtudiants();
  }

  getChambres(): void {
    this.foyerService.getAllChambre().subscribe(
      (data) => this.chambres = data,
      (error) => console.error('Error fetching chambres', error)
    );
  }

  getEtudiants(): void {
    this.foyerService.getAllEtudiants().subscribe(
      (data) => this.etudiants = data,
      (error) => console.error('Error fetching etudiants', error)
    );
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) {
      return;
    }

    const reservation: Reservation = {
      idReservation: 0, // backend should generate the ID
      anneeUniversitaire: this.reservationForm.value.anneeUniversitaire,
      estValide: this.reservationForm.value.estValide,
      chambre: this.reservationForm.value.chambre,
      etudiants: this.reservationForm.value.etudiants
    };

    this.foyerService.addReservation(reservation).subscribe(
      () => {
        this.successMessage = 'Reservation added successfully!';
        this.reservationForm.reset();
      },
      (error) => {
        this.errorMessage = 'An error occurred while adding the reservation.';
        console.error(error);
      }
    );
  }
}
