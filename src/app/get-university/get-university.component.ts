import { Component } from '@angular/core';
import { Universite } from '../models/Universite';
import { FoyerService } from '../service/foyer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-university',
  templateUrl: './get-university.component.html',
  styleUrls: ['./get-university.component.css']
})
export class GetUniversityComponent {
  universitys: Universite[] = []; // Property to hold the fetched blocs
  loading: boolean = true; // To indicate loading state
  error: string | null = null; // To hold any error message

  constructor(private foyerService: FoyerService, private router: Router) {} // Inject Router

  ngOnInit(): void {
    this.getAllUniversity(); // Fetch the blocs when the component initializes
  }

  getAllUniversity(): void {
    this.loading = true; // Set loading to true at the start of the fetch
    this.foyerService.getAllUniversity().subscribe({
      next: (data) => {
        this.universitys = data; // Assign the fetched data to the blocs property
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

  deleteBloc(u: Universite): void {
    if (confirm(`Are you sure you want to delete the bloc "${u.nomUniversite}"?`)) {
      this.foyerService.deleteUniversity(u).subscribe({
        next: () => {
          this.universitys = this.universitys.filter(b => b.idUniversite !== u.idUniversite); // Remove deleted bloc from the array
        },
        error: (err) => {
          this.error = 'Failed to delete the bloc. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }

  updateBloc(university: Universite): void {
    this.router.navigate(['/edit-univeristy', university.idUniversite]); // Navigate to the edit form with bloc ID
  }
}
