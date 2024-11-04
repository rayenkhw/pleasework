import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFoyerComponent } from './get-foyer.component';

describe('GetFoyerComponent', () => {
  let component: GetFoyerComponent;
  let fixture: ComponentFixture<GetFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
