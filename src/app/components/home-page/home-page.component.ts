import { Component, OnInit } from '@angular/core';
import { Perso } from 'src/app/interfaces/i-perso';
import { PersonnageService } from "../../services/personnage.service";
import { MessageService } from "../../services/message.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public personnages: Perso[] = [];

  constructor(private persoService: PersonnageService, private messageService: MessageService) { }

  public ngOnInit(): void {
    this.getPerso();
  }

  public getPerso() {
    this.persoService.getPersonnage()
      .subscribe(caracters => this.personnages = caracters)
  }

}
