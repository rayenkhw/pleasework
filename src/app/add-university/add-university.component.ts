import { Universite } from './../models/Universite';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent {
  UForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService
  ) {
    // Initialize the form with correct form control names
    this.UForm = this.fb.group({
      nomUniversite: ['', Validators.required], // Correct control name
      adresse: ['', Validators.required] // Correct spelling and use of Validators
    });
  }

  onSubmit(): void {
    if (this.UForm.valid) {
      // Create a new Universite instance using form values
      const newUni: Universite = {
        idUniversite: 0, // Assuming 0 or undefined for a new university
        nomUniversite: this.UForm.value.nomUniversite,
        adresse: this.UForm.value.adresse,
        foyer: undefined // Set this according to your logic
      };

      // Call the service to add the university
      this.foyerService.addUniversity(newUni).subscribe({
        next: (universite) => {
          console.log('University added successfully', universite);
          this.UForm.reset(); // Reset form after submission
        },
        error: (err) => {
          console.error('Error adding university', err);
        }
      });
    } else {
      // Optionally handle the case where the form is invalid
      console.log('Form is invalid');
    }
  }
}
