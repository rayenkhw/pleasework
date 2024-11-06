import { Component, OnInit } from '@angular/core';
import { FoyerService } from '../service/foyer.service';
import { Chambre } from '../models/Chambre';

@Component({
  selector: 'app-get-chambre',
  templateUrl: './get-chambre.component.html',
  styleUrls: ['./get-chambre.component.css']
})
export class GetChambreComponent implements OnInit {
  chambres: Chambre[] = []; // Array to hold the list of chambres
  error: string | null = null; // To hold any error message
  loading: boolean = true; // To indicate loading state

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.getAllChambres(); // Fetch all chambres when the component initializes
  }

  getAllChambres(): void {
    this.foyerService.getAllChambre().subscribe({
      next: (data) => {
        this.chambres = data; // Assign retrieved data to chambres array
        this.loading = false; // Update loading state
      },
      error: (err) => {
        this.error = 'Failed to load chambres. Please try again later.'; // Set error message
        this.loading = false; // Update loading state
        console.error(err); // Log error for debugging
      }
    });
  }

  deleteChambre(chambre: Chambre): void {
    if (confirm(`Are you sure you want to delete the chambre ${chambre.numeroChambre}?`)) {
      this.foyerService.deleteChambre(chambre).subscribe({
        next: () => {
          this.chambres = this.chambres.filter(c => c.idChambre !== chambre.idChambre); // Remove deleted chambre from the list
          console.log('Chambre deleted successfully');
        },
        error: (err) => {
          this.error = 'Failed to delete chambre. Please try again later.'; // Set error message
          console.error(err); // Log error for debugging
        }
      });
    }
  }
}
