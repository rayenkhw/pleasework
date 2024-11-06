import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../service/foyer.service'; // Import your service
import { Etudiant } from '../models/Etudiant'; // Import the Etudiant model

@Component({
  selector: 'app-get-etudiant',
  templateUrl: './get-etudiant.component.html',
  styleUrls: ['./get-etudiant.component.css']
})
export class GetEtudiantComponent implements OnInit {
  etudiants: Etudiant[] = []; // Array to hold the list of students
  loading: boolean = false; // Loading state
  error: string | null = null; // Error message

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.loadEtudiants(); // Load the list of students on initialization
  }

  loadEtudiants(): void {
    this.loading = true; // Start loading
    this.foyerService.getAllEtudiants().subscribe({
      next: (data) => {
        this.etudiants = data; // Assign the retrieved data to the component's array
        this.loading = false; // Stop loading
      },
      error: (err) => {
        this.loading = false; // Stop loading
        this.error = 'Failed to load students. Please try again later.'; // Set error message
        console.error(err); // Log error for debugging
      }
    });
  }

  // Method to delete a student
  deleteEtudiant(etudiant: Etudiant): void {
    if (confirm(`Are you sure you want to delete ${etudiant.nomEt} ${etudiant.prenomEt}?`)) {
      this.loading = true; // Start loading
      this.foyerService.deleteEtudiant(etudiant).subscribe({
        next: () => {
          this.loading = false; // Stop loading
          this.loadEtudiants(); // Refresh the list after deletion
        },
        error: (err) => {
          this.loading = false; // Stop loading
          this.error = 'Failed to delete student. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }
}
