import { Injectable } from '@angular/core';
import { Bloc } from '../models/Bloc';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Universite } from '../models/Universite';
import { Chambre } from '../models/Chambre';
import { Etudiant } from '../models/Etudiant';
import { Foyer } from '../models/Foyer';
import { Reservation } from '../models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = 'http://localhost:8082/blocs';
  private apiUrlUniversity = 'http://localhost:8082/universite';
  private apiUrlchambre = 'http://localhost:8082/chambres';
  private apiUrlEtudiant = 'http://localhost:8082/etudiant';
  private apiUrlfoyer = 'http://localhost:8082/foyer';
  private apiUrlreservation = 'http://localhost:8082/reservation';

  constructor(private http: HttpClient) {}
  addBloc(bloc: Bloc): Observable<Bloc> {
    return this.http.post<Bloc>(`${this.apiUrl}/add`, bloc, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  }
  getAllBloc(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(`${this.apiUrl}/all`);

  }
  deleteBloc(bloc: Bloc): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${bloc.idBloc}`);
  }
  updateBloc(bloc: Bloc): Observable<Bloc> {
    const url = `${this.apiUrl}/update`;
    return this.http.put<Bloc>(url, bloc);
  }
  getBlocById(id: number): Observable<Bloc> {
    return this.http.get<Bloc>(`${this.apiUrl}/${id}`);
  }
//university
addUniversity(University: Universite): Observable<Universite> {
  return this.http.post<Universite>(`${this.apiUrlUniversity}/add`, University, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  });
}
getAllUniversity(): Observable<Universite[]> {
  return this.http.get<Universite[]>(`${this.apiUrlUniversity}/all`);

}
deleteUniversity(University: Universite): Observable<any> {
  return this.http.delete(`${this.apiUrlUniversity}/delete/${University.idUniversite}`);
}
updateUniversity(University: Universite): Observable<Universite> {
  const url = `${this.apiUrlUniversity}/update`;
  return this.http.put<Universite>(url, University);
}
getUniversityById(id: number): Observable<Universite> {
  return this.http.get<Universite>(`${this.apiUrlUniversity}/${id}`);
}
//Chambre
addChambre(chambre: Chambre): Observable<Chambre> {
  return this.http.post<Chambre>(`${this.apiUrlchambre}/add`, chambre, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  });
}
getAllChambre(): Observable<Chambre[]> {
  return this.http.get<Chambre[]>(`${this.apiUrlchambre}/all`);

}
deleteChambre(chambre: Chambre): Observable<any> {
  return this.http.delete(`${this.apiUrlchambre}/delete/${chambre.idChambre}`);
}
updateChambre(chambre: Chambre): Observable<Chambre> {
  const url = `${this.apiUrlchambre}/update`;
  return this.http.put<Chambre>(url, chambre);
}
getChambreById(id: number): Observable<Chambre> {
  return this.http.get<Chambre>(`${this.apiUrlchambre}/${id}`);
}
//Etudiant
addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
  return this.http.post<Etudiant>(`${this.apiUrlEtudiant}/add`, etudiant, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  });
}
getAllEtudiants(): Observable<Etudiant[]> {
  return this.http.get<Etudiant[]>(`${this.apiUrlEtudiant}/all`);

}
deleteEtudiant(etudiant: Etudiant): Observable<any> {
  return this.http.delete(`${this.apiUrlEtudiant}/delete/${etudiant.idEtudiant}`);
}
updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
  const url = `${this.apiUrlEtudiant}/update`;
  return this.http.put<Etudiant>(url, etudiant);
}
getEtudiantById(id: number): Observable<Etudiant> {
  return this.http.get<Etudiant>(`${this.apiUrlEtudiant}/${id}`);
}
//
addFoyer(foyer: Foyer): Observable<Foyer> {
  return this.http.post<Foyer>(`${this.apiUrlfoyer}/add`, foyer, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  });
}
getAllFoyer(): Observable<Foyer[]> {
  return this.http.get<Foyer[]>(`${this.apiUrlfoyer}/all`);

}
deleteFoyer(foyer: Foyer): Observable<any> {
  return this.http.delete(`${this.apiUrlfoyer}/delete/${foyer.idFoyer}`);
}
updateFoyer(foyer: Foyer): Observable<Foyer> {
  const url = `${this.apiUrlfoyer}/update`;
  return this.http.put<Foyer>(url, foyer);
}
getFoyerById(id: number): Observable<Foyer> {
  return this.http.get<Foyer>(`${this.apiUrlfoyer}/${id}`);
}
//reservation
addReservation(reservation: Reservation): Observable<Reservation> {
  return this.http.post<Reservation>(`${this.apiUrlreservation}/add-reservation`, reservation, {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  });
}
getAllReservation(): Observable<Reservation[]> {
  return this.http.get<Reservation[]>(`${this.apiUrlreservation}/retrieve-all-reservations`);

}

updateReservation(reservation: Reservation): Observable<Reservation> {
  const url = `${this.apiUrlreservation}/modify-reservation`;
  return this.http.put<Reservation>(url, reservation);
}
getReservationById(id: number): Observable<Reservation> {
  return this.http.get<Reservation>(`${this.apiUrlreservation}/retrieve-reservation/${id}`);
}
deleteReservation(reservation: Reservation): Observable<any> {
  return this.http.delete(`${this.apiUrlreservation}/delete/${reservation.idReservation}`);
}
}
