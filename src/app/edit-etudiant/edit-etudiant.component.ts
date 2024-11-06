import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FoyerService } from '../service/foyer.service'; // Import your service
import { Etudiant } from '../models/Etudiant'; // Import the Etudiant model
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent implements OnInit {
  etudiantForm: FormGroup; // Form group for student
  loading: boolean = false; // Loading state
  error: string | null = null; // Error message
  etudiantId!: number; // Student ID

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.etudiantForm = this.fb.group({
      nomEt: ['', Validators.required],
      prenomEt: ['', Validators.required],
      cin: [0, [Validators.required, Validators.min(1)]],
      ecole: ['', Validators.required],
      dateNaissance: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    // Get the student ID from the route
    this.etudiantId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadEtudiant(); // Load the student's data for editing
  }

  loadEtudiant(): void {
    this.loading = true; // Start loading
    this.foyerService.getEtudiantById(this.etudiantId).subscribe({
      next: (data) => {
        this.etudiantForm.patchValue(data); // Populate the form with student data
        this.loading = false; // Stop loading
      },
      error: (err) => {
        this.loading = false; // Stop loading
        this.error = 'Failed to load student details. Please try again later.'; // Set error message
        console.error(err); // Log error for debugging
      }
    });
  }

  // Method to submit the form
  onSubmit(): void {
    if (this.etudiantForm.valid) {
      this.loading = true; // Start loading
      const updatedEtudiant: Etudiant = {
        idEtudiant: this.etudiantId, // Use the existing ID
        nomEt: this.etudiantForm.value.nomEt,
        prenomEt: this.etudiantForm.value.prenomEt,
        cin: this.etudiantForm.value.cin,
        ecole: this.etudiantForm.value.ecole,
        dateNaissance: this.etudiantForm.value.dateNaissance,
        reservations: [] // You can initialize this based on your logic
      };

      // Call the service to update the student
      this.foyerService.updateEtudiant(updatedEtudiant).subscribe({
        next: () => {
          this.loading = false; // Stop loading
          this.router.navigate(['/etudiants']); // Navigate to the list of students
        },
        error: (err) => {
          this.loading = false; // Stop loading
          this.error = 'Failed to update student. Please try again later.';
          console.error(err);
        }
      });
    } else {
      this.etudiantForm.markAllAsTouched();
    }
  }
}
