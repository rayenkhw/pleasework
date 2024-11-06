import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlocComponent } from './add-bloc/add-bloc.component';
import { GetBlocComponent } from './get-bloc/get-bloc.component';
import { EditBlocComponent } from './edit-bloc/edit-bloc.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { GetUniversityComponent } from './get-university/get-university.component';
import { EditUniversityComponent } from './edit-university/edit-university.component';
import { AddChambreComponent } from './add-chambre/add-chambre.component';
import { GetChambreComponent } from './get-chambre/get-chambre.component';
import { EditChambreComponent } from './edit-chambre/edit-chambre.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { GetEtudiantComponent } from './get-etudiant/get-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { AddFoyerComponent } from './add-foyer/add-foyer.component';
import { GetFoyerComponent } from './get-foyer/get-foyer.component';
import { EditFoyerComponent } from './edit-foyer/edit-foyer.component';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { GetReservationComponent } from './get-reservation/get-reservation.component';
import { EditReservationComponent } from './edit-reservation/edit-reservation.component';

const routes: Routes = [
  {path:"addBloc",component:AddBlocComponent},
  {path:"blocks",component:GetBlocComponent},
  { path:'edit-bloc/:id', component: EditBlocComponent },
  {path:"addUnisersity",component:AddUniversityComponent},
  {path:"univeristy",component:GetUniversityComponent},
  { path:'edit-univeristy/:id', component: EditUniversityComponent },
  {path:"addChambre",component:AddChambreComponent},
  {path:"Chambres",component:GetChambreComponent},
  { path:'edit-chambre/:id', component: EditChambreComponent },
  {path:"addEtudiant",component:AddEtudiantComponent},
  {path:"etudiants",component:GetEtudiantComponent},
  { path:'edit-etudiant/:id', component: EditEtudiantComponent },
  {path:"addFoyer",component:AddFoyerComponent},
  {path:"foyers",component:GetFoyerComponent},
  { path:'edit-foyer/:id', component: EditFoyerComponent },
  {path:"addReservation",component:AddReservationComponent},
  {path:"reservations",component:GetReservationComponent},
  { path:'edit-reservation/:id', component: EditReservationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
