import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Perso } from "../interfaces/i-perso";
import { PERSONNAGES } from "../../assets/mock/mock-perso";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  public getPersonnage(): Observable<Perso[]> {
    const persos = of(PERSONNAGES);
    this.messageService.add('MessageService: Ajout du perso');
    return persos;
  }

  constructor(private messageService: MessageService) { }
}
