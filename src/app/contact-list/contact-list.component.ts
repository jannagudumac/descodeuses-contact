import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ContactService } from '../services/contact.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { Contact } from '../models/contact.model';


registerLocaleData(localeFr);

@Component({
  selector: 'app-contact-list',
  standalone: true, // 
  imports: [
    MatListModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, 
    MatIconModule,
    MatButtonModule,
    CommonModule,
    MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,
    MatDialogModule,
  
    
  ],

  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'] 
})
export class ContactListComponent implements OnInit {
  listeContact: Contact[] = [];
  //A:
  //Creer variable tableau "listeContact"
  //Qui contient deux contactes moi et ma camarade
  //avec "nom" et "prenom"

  //any: type dynamique
  //dynamique => le type n'est pas statique et unique mais multiple
  //je n’impose pas de type précis, tout est accepté

  //intiliasé tableau vide pour eviter les exceptions de Null
  //Quand j'essaie d'acceder

  listeContactFiltre: any[] = [];

  countContacts = 0;
  textRecherche: string = '';

  // C:
  //Afficher le nombre de contactes au bas de la page

  constructor( //when there's a class
    private dialog: MatDialog,
    private service: ContactService
  ) {}

  ngOnInit() {
    this.service.getContacts().subscribe(contacts => {
      this.listeContact = contacts;
      this.countContacts = contacts.length;
      this.onSearch();
    });
  }
  

  sendEmail(email: string): void {
    window.location.href = 'mailto:' + email;
  }

  onSearch() {
    // We don't modify listeContact directly, keep original list intact
    const recherche = this.textRecherche.toLowerCase().trim();

    this.listeContactFiltre = [];

    for (let element of this.listeContact.sort((a, b) =>
      (a.surname ?? '').localeCompare(b.surname ?? '')
    )) {
      //console.log(this.textRecherche);

      //Methode 1: par filter
      //Fonction toLowerCase: pour faire une recherche non sensible au majuscule
      //this.listeContactFiltre = this.listeContact.filter(contact=>
      //  contact.nom.toLowerCase().startsWith(this.textRecherche.toLowerCase()) || 
      //  contact.prenom.toLowerCase().startsWith(this.textRecherche.toLowerCase())
      //);

      //Methode 2: avec la boucle for
      //Utiliser .push pour ajouter à la liste listeContactFiltre

      //this.listeContactFiltre = [];
      //for (let index = 0; index < this.listeContact.length; index++) {
      //  const element = this.listeContact[index];
      //  const recherche= this.textRecherche.toLowerCase().trim();

      //  if(
      //    element.nom.toLowerCase().startsWith(recherche)|| 
      //    element.prenom.toLowerCase().startsWith(recherche) ) {
      //    this.listeContactFiltre.push(element);
      //  }
      //}

      //Methode 3: avec la boucle for of
      //pas acces à l'indexe

      if (
        (element.name ?? '').toLowerCase().startsWith(recherche) ||
        (element.surname ?? '').toLowerCase().startsWith(recherche)
      ) {
        this.listeContactFiltre.push(element);
      }
    }
  }

  onDelete(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe((result : boolean)=> {
      if (result === true) {
        console.log('L\'utilisateur a confirmé');
        const index = this.listeContact.findIndex(item=>item.id==id)
        this.listeContact.splice(index,1);
        this.onSearch()
      } else if (result === false) {
        console.log('L\'utilisateur a annulé');
      } else {
        console.log('La boîte de dialogue a été fermée sans action explicite');
      }
    });
  }


}

