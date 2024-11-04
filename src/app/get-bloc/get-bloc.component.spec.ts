import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBlocComponent } from './get-bloc.component';

describe('GetBlocComponent', () => {
  let component: GetBlocComponent;
  let fixture: ComponentFixture<GetBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
