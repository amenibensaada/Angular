import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css'],
})
export class FournisseurComponentComponent {
  idFournisseur: Number = 105;
  code: string = 'A104B89';
  libelle: string = 'MyTeck';
  hide: boolean = false;
  changeButtonState() {
    this.hide = true;
    console.log('button state changed from false to true', this.hide);
  }
}
