import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Perso } from "../../interfaces/i-perso";
import { DialogDetailsComponent } from "../dialog-details/dialog-details.component";

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent {

  @Input() personnages!: Perso[];

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  public onSelect(perso: Perso) {
    this.dialog.open(DialogDetailsComponent)
  }

  public onAddFav(name: string) {
    this._snackBar.open(name + ' à été ajouté aux favoris', 'X');
  }

}
