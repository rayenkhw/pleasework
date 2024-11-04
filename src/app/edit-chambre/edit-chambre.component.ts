import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerService } from '../service/foyer.service';
import { Chambre, TypeChambre } from '../models/Chambre'; // Import your Chambre model

@Component({
  selector: 'app-edit-chambre',
  templateUrl: './edit-chambre.component.html',
  styleUrls: ['./edit-chambre.component.css']
})
export class EditChambreComponent implements OnInit {
  chambreForm: FormGroup; // Form group for chambre
  typesChambre = Object.values(TypeChambre); // Get available chambre types
  error: string | null = null; // To hold any error message
  id!: number; // ID of the chambre being edited
  loading: boolean = true; // To indicate loading state

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.chambreForm = this.fb.group({
      numeroChambre: ['', [Validators.required, Validators.min(1)]], // Ensure chambre number is required and greater than 0
      typeChambre: ['', Validators.required] // Ensure chambre type is required
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id']; // Get the chambre ID from the route
    this.getChambre(); // Fetch the chambre details for editing
  }

  getChambre(): void {
    this.foyerService.getChambreById(this.id).subscribe({
      next: (foundChambre) => {
        this.chambreForm.patchValue({
          numeroChambre: foundChambre.numeroChambre,
          typeChambre: foundChambre.typeChambre
        });
        this.loading = false; // Update loading state
      },
      error: (err) => {
        this.error = 'Failed to load chambre details. Please try again later.'; // Set error message
        this.loading = false; // Update loading state
        console.error(err); // Log error for debugging
      }
    });
  }

  onSubmit(): void {
    if (this.chambreForm.valid) {
      const updatedChambre: Chambre = {
        idChambre: this.id,
        numeroChambre: this.chambreForm.value.numeroChambre,
        typeChambre: this.chambreForm.value.typeChambre,
        bloc: undefined, // Set this according to your logic
        reservations: [] // Set this according to your logic
      };

      this.foyerService.updateChambre(updatedChambre).subscribe({
        next: () => {
          this.router.navigate(['/Chambres']); // Navigate back to the list after successful update
        },
        error: (err) => {
          this.error = 'Failed to update chambre. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }
}
