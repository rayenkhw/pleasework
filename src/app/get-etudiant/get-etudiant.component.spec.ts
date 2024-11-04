import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEtudiantComponent } from './get-etudiant.component';

describe('GetEtudiantComponent', () => {
  let component: GetEtudiantComponent;
  let fixture: ComponentFixture<GetEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetEtudiantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
