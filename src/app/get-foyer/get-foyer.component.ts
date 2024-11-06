import { Component, OnInit } from '@angular/core';

import { Foyer } from '../models/Foyer';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-get-foyer',
  templateUrl: './get-foyer.component.html',
  styleUrls: ['./get-foyer.component.css']
})
export class GetFoyerComponent implements OnInit {
  foyers: Foyer[] = [];
  errorMessage = '';

  constructor(private foyerService: FoyerService) {}

  ngOnInit(): void {
    this.getAllFoyers();
  }

  getAllFoyers(): void {
    this.foyerService.getAllFoyer().subscribe({
      next: (data) => {
        this.foyers = data;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load foyers. Please try again later.';
      }
    });
  }

  deleteFoyer(id: number): void {
    if (confirm('Are you sure you want to delete this foyer?')) {
      this.foyerService.deleteFoyer({ idFoyer: id } as Foyer).subscribe({
        next: () => {
          this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== id);
        },
        error: () => {
          this.errorMessage = 'Failed to delete foyer. Please try again later.';
        }
      });
    }
  }


}
