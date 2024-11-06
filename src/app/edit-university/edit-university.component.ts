import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from '../service/foyer.service';
import { Universite } from '../models/Universite';

@Component({
  selector: 'app-edit-university',
  templateUrl: './edit-university.component.html',
  styleUrls: ['./edit-university.component.css']
})
export class EditUniversityComponent implements OnInit {
  blocForm: FormGroup; // Form group for the university
  loading: boolean = true; // To indicate loading state
  error: string | null = null; // To hold any error message
  id!: number; // ID of the university being edited

  constructor(
    private route: ActivatedRoute,
    private foyerService: FoyerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    // Initialize the form with proper controls and validators
    this.blocForm = this.fb.group({
      nomUniversite: ['', Validators.required],
      adresse: ['', Validators.required] // Correct type to string
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Get the university ID from the route, convert to number
    this.getUni(); // Fetch the university details for editing
  }

  getUni(): void {
    this.foyerService.getUniversityById(this.id).subscribe({
      next: (foundUniversity) => {
        // Patch the form with the university details
        this.blocForm.patchValue({
          nomUniversite: foundUniversity.nomUniversite,
          adresse: foundUniversity.adresse // Use correct field names
        });
        this.loading = false; // Update loading state
      },
      error: (err) => {
        this.error = 'Failed to load university details. Please try again later.'; // Set error message
        this.loading = false; // Update loading state
        console.error(err); // Log error for debugging
      }
    });
  }

  onSubmit(): void {
    if (this.blocForm.valid) {
      const updated: Universite = {
        idUniversite: this.id,
        nomUniversite: this.blocForm.value.nomUniversite, // Use correct field name
        adresse: this.blocForm.value.adresse, // Use correct field name
        foyer: undefined, // Set this according to your logic
      };

      this.foyerService.updateUniversity(updated).subscribe({
        next: () => {
          this.router.navigate(['/univeristy']); // Navigate back to the list after successful update
        },
        error: (err) => {
          this.error = 'Failed to update the university. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }
}
