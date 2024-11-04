import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foyer } from '../models/Foyer';
import { FoyerService } from '../service/foyer.service';

@Component({
  selector: 'app-edit-foyer',
  templateUrl: './edit-foyer.component.html',
  styleUrls: ['./edit-foyer.component.css']
})
export class EditFoyerComponent implements OnInit {
  foyer: Foyer | undefined;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foyerService: FoyerService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.foyerService.getFoyerById(id).subscribe({
      next: (foyer) => {
        this.foyer = foyer;
      },
      error: () => {
        this.errorMessage = 'Failed to load foyer details.';
      }
    });
  }

  saveChanges(): void {
    if (this.foyer) {
      this.foyerService.updateFoyer(this.foyer).subscribe({
        next: () => {
          this.router.navigate(['/foyers']);
        },
        error: () => {
          this.errorMessage = 'Failed to update foyer. Please try again.';
        }
      });
    }
  }
}
