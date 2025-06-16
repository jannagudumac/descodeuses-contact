import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-list',
  imports: [
    MatListModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, //Necessaire pour la directive ngModel (template driven form)
    MatIconModule,
    MatButtonModule,
    CommonModule, MatMenuModule,
    MatDividerModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  constructor(private snackBar: MatSnackBar) { };
  //A:
  //Creer variable tableau "listeContact"
  //Qui contient deux contactes moi et ma camarade
  //avec "nom" et "prenom"
  listeContact = [
    {
      id: 7, prenom: 'Bob', nom: 'Bobertus', email: 'bobertus@gmail.com'
    },
    {
      id: 88, prenom: 'Anna', nom: 'Malina', email: 'anmalina@gmail.com'
    },
    {
      id: 5, prenom: 'Simo', nom: 'Bernardo', email: 'sbernardo@gmail'
    },
    {
      id: 9, prenom: 'Alex', nom: 'Chat', email: 'alexchat@gmail.com'
    }
  ];

  //any: type dynamique
  //dynamique => le type n'est pas statique et unique mais multiple
  //je n’impose pas de type précis, tout est accepté

  //intiliasé tableau vide pour eviter les exceptions de Null
  //Quand j'essaie d'acceder
  listeContactFiltre: any[] = [];

  countContacts = 0;
  textRecherche: string = '';
  selectedId: number | null = null;
  menuOpenedId: number | null = null;
  menu: any;

  //C:
  //Afficher le nombre de contactes au bas de la page

  ngOnInit() {
    this.onSearch();

    //Compter le nombre des elements
    //methode 1: .length;
    //this.countContacts = this.listeContact.length;

    //methode 2: boucle for
    for (let index = 0; index < this.listeContact.length; index++) {
      this.countContacts = this.countContacts + 1;
    }
  }


  sendEmail(email: string): void {
    window.location.href = 'mailto:' + email;

  }



  onSearch() {

    this.listeContact = this.listeContact.sort((a, b) => a.prenom.localeCompare(b.prenom));
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
    this.listeContactFiltre = [];
    for (let element of this.listeContact) {
      const recherche = this.textRecherche.toLowerCase().trim();


      if (
        element.nom.toLowerCase().startsWith(recherche) ||
        element.prenom.toLowerCase().startsWith(recherche)) {
        this.listeContactFiltre.push(element);
      }
    }
  }

  onDelete(id: number) {
    const index = this.listeContact.findIndex(item => item.id == id)
    this.listeContact.splice(index, 1);
    this.onSearch();
    this.snackBar.open('Deleted');
  }

}

