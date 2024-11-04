import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoyerService } from '../service/foyer.service';
import { Bloc } from '../models/Bloc';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  blocForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private foyerService: FoyerService
  ) {
    this.blocForm = this.fb.group({
      nomBloc: ['', Validators.required],
      capacityBloc: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit(): void {
    if (this.blocForm.valid) {
      const newBloc: Bloc = this.blocForm.value;
      this.foyerService.addBloc(newBloc).subscribe({
        next: (bloc) => {
          console.log('Bloc added successfully', bloc);
          this.blocForm.reset(); // Reset form after submission
        },
        error: (err) => {
          console.error('Error adding bloc', err);
        }
      });
    }
  }
}
