import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from '../service/foyer.service';
import { Foyer } from '../models/Foyer';

@Component({
  selector: 'app-add-foyer',
  templateUrl: './add-foyer.component.html',
  styleUrls: ['./add-foyer.component.css']
})
export class AddFoyerComponent {
  foyerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private foyerService: FoyerService, private fb: FormBuilder) {
    this.foyerForm = this.fb.group({
      nomFoyer: ['', Validators.required],
      archiverFoyer: [false],
      capacityFoyer: ['', [Validators.required, Validators.min(1)]],
      universite: [null],
      blocs: [[]]
    });
  }

  onSubmit(): void {
    if (this.foyerForm.valid) {
      const newFoyer: Foyer = this.foyerForm.value;
      this.foyerService.addFoyer(newFoyer).subscribe({
        next: (response) => {
          this.successMessage = 'Foyer added successfully!';
          this.errorMessage = '';
          this.foyerForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Failed to add foyer. Please try again.';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
