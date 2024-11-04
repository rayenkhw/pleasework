import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { Bloc } from '../models/Bloc'; // Adjust the import path if necessary
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-get-bloc',
  templateUrl: './get-bloc.component.html',
  styleUrls: ['./get-bloc.component.css']
})
export class GetBlocComponent implements OnInit {
  blocs: Bloc[] = []; // Property to hold the fetched blocs
  loading: boolean = true; // To indicate loading state
  error: string | null = null; // To hold any error message

  constructor(private foyerService: FoyerService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.getAllBlocs(); // Fetch the blocs when the component initializes
  }

  getAllBlocs(): void {
    this.loading = true; // Set loading to true at the start of the fetch
    this.foyerService.getAllBloc().subscribe({
      next: (data) => {
        this.blocs = data; // Assign the fetched data to the blocs property
        this.loading = false; // Update loading state
        this.error = null; // Reset any previous error message
      },
      error: (err) => {
        this.error = 'Failed to load blocs. Please try again later.'; // Set error message
        this.loading = false; // Update loading state
        console.error(err); // Log error for debugging
      }
    });
  }

  deleteBloc(bloc: Bloc): void {
    if (confirm(`Are you sure you want to delete the bloc "${bloc.nomBloc}"?`)) {
      this.foyerService.deleteBloc(bloc).subscribe({
        next: () => {
          this.blocs = this.blocs.filter(b => b.idBloc !== bloc.idBloc); // Remove deleted bloc from the array
        },
        error: (err) => {
          this.error = 'Failed to delete the bloc. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }

  updateBloc(bloc: Bloc): void {
    this.router.navigate(['/edit-bloc', bloc.idBloc]); // Navigate to the edit form with bloc ID
  }
}
