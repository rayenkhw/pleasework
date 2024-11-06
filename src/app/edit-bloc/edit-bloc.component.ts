import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Reactive Forms
import { FoyerService } from '../service/foyer.service';
import { Bloc } from '../models/Bloc';

@Component({
  selector: 'app-edit-bloc',
  templateUrl: './edit-bloc.component.html',
  styleUrls: ['./edit-bloc.component.css']
})
export class EditBlocComponent implements OnInit {
  blocForm: FormGroup; // Form group for the bloc
  loading: boolean = true; // To indicate loading state
  error: string | null = null; // To hold any error message
  idBloc!: number; // ID of the bloc being edited

  constructor(
    private route: ActivatedRoute,
    private foyerService: FoyerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capacityBloc: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    this.idBloc = +this.route.snapshot.params['id']; // Get the bloc ID from the route, convert to number
    this.getBloc(); // Fetch the bloc details for editing
  }

  getBloc(): void {
    this.foyerService.getBlocById(this.idBloc).subscribe({
      next: (foundBloc) => {
        this.blocForm.patchValue({
          nomBloc: foundBloc.nomBloc,
          capacityBloc: foundBloc.capacityBloc
        });
        this.loading = false; // Update loading state
      },
      error: (err) => {
        this.error = 'Failed to load bloc details. Please try again later.'; // Set error message
        this.loading = false; // Update loading state
        console.error(err); // Log error for debugging
      }
    });
  }

  onSubmit(): void {
    if (this.blocForm.valid) {
      const updatedBloc: Bloc = {
        idBloc: this.idBloc,
        nomBloc: this.blocForm.value.nomBloc,
        capacityBloc: this.blocForm.value.capacityBloc,
        foyer: undefined, // Set this according to your logic
        chambres: [] // Set this according to your logic
      };

      this.foyerService.updateBloc(updatedBloc).subscribe({
        next: () => {
          this.router.navigate(['/blocks']); // Navigate back to the list after successful update
        },
        error: (err) => {
          this.error = 'Failed to update the bloc. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }
}
