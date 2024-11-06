import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUniversityComponent } from './get-university.component';

describe('GetUniversityComponent', () => {
  let component: GetUniversityComponent;
  let fixture: ComponentFixture<GetUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
