import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GetBlocComponent } from './get-bloc/get-bloc.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { GetUniversityComponent } from './get-university/get-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { EditChambreComponent } from './edit-chambre/edit-chambre.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { GetEtudiantComponent } from './get-etudiant/get-etudiant.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { GetFoyerComponent } from './get-foyer/get-foyer.component';
import { EditFoyerComponent } from './edit-foyer/edit-foyer.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { GetReservationComponent } from './get-reservation/get-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBlocComponent,
    GetBlocComponent,
    EditBlocComponent,
    AddUniversityComponent,
    GetUniversityComponent,
    EditUniversityComponent,
    AddChambreComponent,
    GetChambreComponent,
    EditChambreComponent,
    AddEtudiantComponent,
    EditEtudiantComponent,
    GetEtudiantComponent,
    AddFoyerComponent,
    GetFoyerComponent,
    EditFoyerComponent,
    AddReservationComponent,
    GetReservationComponent,
    EditReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
